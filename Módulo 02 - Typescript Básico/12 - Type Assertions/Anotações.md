## O que é?

É uma assistência que damos ao Typescript para ele entender especificamente o que é / como funciona determinado elemento.

Ao usar o exemplo de pegar o valor de um campo de texto, o seguinte erro foi apresentado:

```
A propriedade 'value' não existe no tipo 'HTMLElement'.ts(2339)
```

Isso aconteceu porque quando seleciono um objeto no HTML, ele é um HTMLElement (um elemento geral do HTML), mas precisamos dizer ao TS qual o tipo de elemento que ele é.

Nesse exemplo da aula estamos simulando os dados de um input e um input tem value (div não tem por exemplo).

Então especifico qual elemento ele é (HTMLInputElement) e não terei mais erros.
