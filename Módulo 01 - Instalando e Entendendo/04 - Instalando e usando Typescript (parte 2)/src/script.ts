let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLButtonElement;
let resultado = document.getElementById("resultado") as HTMLDivElement;

function calcular(n1: number, n2: number) {
  return n1 + n2;
}

botao.addEventListener("click", function () {
  resultado.innerHTML = calcular(
    parseInt(numero1.value),
    parseInt(numero2.value)
  ).toString();
});
