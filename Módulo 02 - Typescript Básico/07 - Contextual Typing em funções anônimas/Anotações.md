## Exemplo da aula

Para entender sobre o conceito vou criar um array de nomes e quero exibir todos os itens em maiúsculo, por isso foi utilizado um forEach.

Perceba que o Typescript não deu nenhum erro e aceitou, mesmo não tendo sido definido o tipo do array, o TS não preveu o problema por conta do Contextual Typing.

## Contextual Typing.

O TS vai verificar o contexto do seu código e com base no contexto ele vai determinar os types sem que você precise especificar os types.

Ele verificou que no array de names só tem string, então ele vai definir names como array de strings, ao passar a função anônima dentro do forEach, o TS sabe que a função só receberá dados do array e que o array só tem strings.

Ao colocar um número no array, o TS identifica um erro na função upperCase e o Contextual Typing não tem certeza se só tem string dentro do array.

Podemos solucionar esse problema utilizando um typeof, então a função upperCase só será executada se o tipo for string.
