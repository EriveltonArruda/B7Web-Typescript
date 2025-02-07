## Exemplo da aula

Foi criado um botão que seleciona o elemento de botão pelo DOM e em seguida foi adicionado um evento nele.

Perceba que não deu erro e o typescript aceitou, ele aceitou porque como o target é o ES2016 e o código de lib está comentado lá nas configurações do TS, essas libs foram importadas por padrão por conta do ES2016.

### libs

A partir do momento que descomentamos o código lib nas configurações do TS, o código deu erro, o TS não conseguiu identificar quem é document, quem é console, o que é HTMLButtonElement?

Isso aconteceu porque a lib está vazia por padrão nas configurações.

Para resolver isso adicionamos elementos ou bibliotecas que vão dar suporte ao nosso código TS.

Ao adicionar a biblioteca DOM dentro de lib, os erros relacionados a ele foram solucionados.

Quando a lib está vazia, o TS só reconhece comando Javascript básico (criar uma variável, fazer if, for, etc.)
