const campoSenha =  document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const trocarsenha = document.getElementById("mudarsenha");
const aparacerCampo = document.getElementById("campotextos");
const estadoCheckbox = document.getElementById("ValidarEstudante");

campoSenha.addEventListener("input",
    ()=> {
    let tamSenha = campoSenha.value.length;
    if(tamSenha< 8){
       mensagem.textContent = "Senha Deve Ter Pelo Menos 8 Caracteres";
       mensagem.style.color = "red";
       campoSenha.style.outline = "none";
       campoSenha.style.border = "2px solid red";
    }
    else{
        mensagem.textContent = "Senha Valida";
        mensagem.style.color = "green";
        campoSenha.style.border ="1px solid black";
    }
    }
)

trocarsenha.addEventListener("click",
    function trocar() {
    if(campoSenha.type === "password"){
    campoSenha.type = "text";
    }
    else{
    campoSenha.type ="password";
    }
    }
)

estadoCheckbox.addEventListener("change", function Campovisivel() {
    if (estadoCheckbox.checked) {
        aparacerCampo.style.display = "block";    
    } else {
        aparacerCampo.style.display = "none";
    }
});
