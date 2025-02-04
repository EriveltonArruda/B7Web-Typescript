function firstLetterUpperCase(name: string): string {
  let firstLetter = name.charAt(0).toUpperCase();
  return `${firstLetter}${name.substring(1)}`;
}

let nome: number = firstLetterUpperCase("erivelton"); // a função está toda tipada como string, não aceita number

// Exemplo de number
function somar(n1: number, n2: number): number {
  return n1 + n2;
}

let resultado = somar("Erivelton", "Rodrigues"); // aceita apenas números
