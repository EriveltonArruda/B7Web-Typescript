// colocando o tipo
function firstLetterUpperCase(name: string, lastName: string, age: number) {
  // Primeira letra em maiúsculo
  let firstLetter = name.charAt(0).toUpperCase();
  // Juntando com o restante da string
  return `${firstLetter}${name.substring(1)}`;
}
