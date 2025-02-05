// TYPE
// criando um tipo próprio
type NomeCompleto = string;
type Idade = string | number; // type misto

// usando o tipo
let nome: NomeCompleto = "Erivelton";

// Usando em funções
// podemos usar em parâmetros e no retorno
function mostrarIdade(i: Idade): Idade {
  return i;
}

// Porque usar type próprio?
type User = {
  nome: string;
  idade: number;
};

// não é possível adicionar novas propriedades
type User = {
  outro: string;
};

// Passando o type próprio no parâmetro
function resumo(usuario: User) {
  return `Olá ${usuario.nome}, tudo bem com você? Sua idade é: ${usuario.idade}`;
}

resumo({
  nome: "Erivelton",
  idade: 33,
});

// INTERFACE
interface UserInterface {
  nome: string;
  idade: number;
}

// Adicionando outra propriedade ao interface
interface UserInterface {
  outro: string;
}

function resumoInterface(usuario: UserInterface) {
  return `Olá ${usuario.nome}, tudo bem com você? Sua idade é: ${usuario.idade}`;
}

resumoInterface({
  nome: "Erivelton",
  idade: 33,
  outro: "blabla",
});
