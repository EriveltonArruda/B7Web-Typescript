## Função de exemplo

Usaremos uma função que transformará a primeira letra da string em maiúsculo.

Existem duas formas de fazer isso:

1. Pegar a primeira letra em maiúsculo em uma variável separada, em seguida retornar a variável + o restante da palavra.
2. Transformar o nome em um array, onde cada letra é um item do array, pegar o primeiro item do array, transformar em maiúsculo e em seguida dar um join() no restante do array.

Será feita a primeira opção, criaremos a variável e usaremos a função charAt(0) em conjunto com a toUpperCase, charAt(0) vai pegar o primeiro caractere da string e toUpperCase() transformará em maiúsculo, em seguida junto com o restante da string utilizando o substring(1), isso quer dizer que a função substring pegará a string começando na segunda posição.

### Usando Typescript no parâmetro

Para colocar o type no parâmetro fazemos igual a criação da variável, caso a função tenha mais de 1 parâmetro, só colocar o tipo de cada parâmetro normalmente.
