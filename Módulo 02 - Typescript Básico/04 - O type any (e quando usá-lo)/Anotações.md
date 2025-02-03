## O que é

Esse type funciona única e exclusivamente no Typescript, ele vai auxiliar o typescript no processo de verificação dos types, mas é usado como último recurso, antes de usar ele pense no melhor tipo para usar.

## Quando usar?

É utilizado para "mesclar" tipos, um array de string e números é um ótimo exemplo.

Ao colocar o tipo da variável do array como any, ela passa a aceitar QUALQUER tipo de dado dentro do array.

Muito usado quando você criou uma variável sem colocar o tipo e o typescript deu algum aviso/erro, ao colocar a tipagem como any o TS deixará passar.
