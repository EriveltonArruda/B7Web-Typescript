Union Types = variável/parâmetro com múltiplos tipos

No exemplo de idade pegando o DOM, lembre-se que o innerHTML retorna uma string, então se a variável idade tivesse somente o tipo number, daria erro.

## Como fazer?

Para fazer com que a variável receba dois tipos diferentes, só precisamos colocar uma barra chamada "pipe" | e definir os tipos que ela pode receber.

### Exemplo da função mostrarIdade

Perceba que ao usar a função foi passada a idade em number e em string e o TS aceitou ambas porque o type do parâmetro idade é um Union Type.

### toUpperCase()

Já no caso do console.log que contém o toUpperCase resultará em erro na própria função e não na implementação, é importante saber que quando temos um parâmetro com mais de um tipo diferente e estamos usando uma propriedade/função agregada ao parâmetro que é exclusiva para um dos tipos que estamos executando, obrigatoriamente temos que verificar o tipo da propriedade na função.
