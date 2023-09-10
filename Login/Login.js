const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  logar();
});

function logar(){
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const emailDigitado = email.value;
  const senhaDigitada = senha.value;

  if (emailDigitado === "teste" && senhaDigitada === "teste123") {
    window.location.href = "../Dashboard/main.html";
  }else {
    alert("Usuario ou senha estão incorreto, tente novamente!");
  }
}

const botao = document.getElementById("entrar");
botao.addEventListener("click", logar);
