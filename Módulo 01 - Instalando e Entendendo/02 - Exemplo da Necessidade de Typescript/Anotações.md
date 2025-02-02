## Exemplo para usar o Typescript

Para exemplificar o uso do typescript, vamos criar uma calculadora em Javascript.

Seleciono os elementos que vou usar, crio a função que vai ser responsável pela soma e em seguida adiciono um evento de clique no meu botão, o resultado dessa soma será exibido na div de resultado.

## O que deu errado?

Perceba que se fizer essa soma usando somente Javascript e colocar 20 no input de numero1 e 15 no numero2 resultará em 2015, ou seja, uma concatenação, mas porque isso aconteceu?

Quando eu tenho um elemento de texto (input), o valor dele sempre será uma string,

Para resolver isso podemos fazer uma verificação simples, se numero1 e numero2 forem do TIPO número, então o cálculo será feito, caso contrário teremos que primeiro converter a string em número e só depois fazer o cálculo.

Uma dica sobre a conversão, se colocar um + antes da variável que tem uma string, ele converte pra número também, assim:

```
return +n1 + +n2;
```

Perceba que para que a calculadora funcionasse foi necessário fazer uma validação, com o typescript isso não será necessário, com o typsecript eu consigo dizer que a variável n1 e n2 sempre será um número, se um número não for enviado, o código não vai ser nem executado, e para usar a função será necessário corrigir esse erro.
