// idade pode ser string ou number (Union Types)
let idade: string | number = 33;

idade = document.getElementById("idade")!.innerHTML;

// Exemplo em parâmetro
function mostrarIdade(idade: string | number) {
  console.log(`Minha idade é: ${idade}`);
  // verificação da propriedade exclusiva
  if (typeof idade === "string") {
    console.log(idade.toUpperCase());
  } else {
    console.log(idade);
  }
}

mostrarIdade(33);
mostrarIdade("33");
