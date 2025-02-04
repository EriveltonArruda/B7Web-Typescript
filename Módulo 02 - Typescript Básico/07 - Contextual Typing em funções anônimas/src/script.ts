let names = ["Erivelton", "Everton", "Fulano", 33];

names.forEach(function (nome) {
  // possível solução para o problema
  if (typeof nome === "string") {
    console.log(nome.toUpperCase());
  } else {
    return nome;
  }
});
