// noUnusedLocals
function somar(n1: number, n2: number, n3: number): number {
  let nome: string = "Erivelton"; // Variável local
  return n1 + n2;
}

// noUnusedParameters
function parameters(n1: number, n2: number, n3: number): number {
  return n1 + n2;
}

// noImplicitReturns
function returns(n1: number, n2: number) {
  // return implícito
  if (n1 > 10) {
    return n1 + n2;
  }
}
