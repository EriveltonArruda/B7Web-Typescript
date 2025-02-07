let nome: "Erivelton" = "Erivelton"; // Sempre será Erivelton

nome = "Pedro"; // Não será reatribuido por conta do type literal.

// Usando com Union Types
function mostrarTexto(texto: string, alinhamento: "left" | "right" | "center") {
  return `<div style=text-align${alinhamento}>${texto}</div>`;
}

mostrarTexto("Erivelton", "left");
mostrarTexto("Erivelton", "right");
mostrarTexto("Erivelton", "blabla"); // Perceba que blabla agora não será aceito

// Outro exemplo:

// Poderia criar um type e colocar no retorno da função temNome (no lugar do boolean).
type VerdadeiroFalso = true | false;

// Só aceitará true ou false
function temNome(nome: string): boolean {
  return nome !== "" ? true : false;
}

// Outro exemplo:
interface Options {
  width: number;
  height: number;
}

function configurar(props: Options | "auto") {}

configurar({ width: 100, height: 200 });
configurar("auto");
configurar("automatico"); // não funcionará porque espera OU as propriedades OU 'auto';
