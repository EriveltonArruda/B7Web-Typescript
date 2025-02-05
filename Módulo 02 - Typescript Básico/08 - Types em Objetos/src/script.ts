// definindo type do objeto
function resumo(
  usuario: { nome: string; idade: number },
  outro: { blabla: string }
) {
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos.`;
}

// Implementação da função
let u = {
  nome: "Erivelton",
  idade: 33,
};

resumo(u);
