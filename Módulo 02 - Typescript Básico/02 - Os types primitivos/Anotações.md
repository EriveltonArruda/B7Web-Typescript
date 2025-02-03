## Onde colocar os tipos?

Antes de definir o valor da variável.

### Porque fazer isso?

Isso previne vários erros, como por exemplo:
Uma variável foi criada com o tipo string, então ela aceitará SOMENTE string, se passar um number nela, o TS acusará erro.

Várias linguagens trabalham assim, podemos citar a C# e Java (Essa é fortemente tipada).

Quando estamos trabalhando com Typescript, o editor sempre vai nos alertar como podemos melhorar nosso código.

### number

Com relação ao tipo number, não é obrigatório colocar a tipagem porque o vscode já reconhece como número, então é opcional, só lembre que existem casos e casos, no caso de pegar um valor de um input, ele SEMPRE será uma string, então nesse caso será necessário fazer uma verificação para poder converter o tipo.

### boolean

Apesar de valores boolean aceitar 1 ou 0 dentro de um if, na criação da variável não é permitido, se definir o tipo como boolean, o typescript aceita somente true ou false;

### Dica

Sempre que for tipar uma variável, coloque em minúsculo.
