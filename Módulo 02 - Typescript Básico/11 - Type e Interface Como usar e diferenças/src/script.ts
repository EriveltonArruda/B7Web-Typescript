// TYPE

// criando um tipo próprio
type NomeCompleto = string;
type Idade = string | number; // type misto

// usando o tipo
let nome: NomeCompleto = "Erivelton";

// Usando em funções
function mostrarIdade(i: Idade): Idade {
  return i;
}

// Porque usar type próprio?
type User = {
  nome: "Erivelton";
  idade: 33;
};

// Passando o type próprio no parâmetro
function resumo(usuario: User) {
  return `Olá ${usuario.nome}, tudo bem com você? Sua idade é: ${usuario.idade}`;
}

// INTERFACE
