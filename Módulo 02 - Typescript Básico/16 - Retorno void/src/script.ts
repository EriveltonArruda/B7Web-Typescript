function removerElemento(el: HTMLElement): void {
  el.remove();

  return "blablabla"; // a função não aceita retorno porque é void
}

removerElemento(document.getElementById("teste"));

// Outro exemplo

type QualquerFuncao = () => void;

const algo: QualquerFuncao = () => {
  return "blabla"; // Aceita return
};

const blabla = (): void => {
  return "blablabla"; // Não aceita
};
