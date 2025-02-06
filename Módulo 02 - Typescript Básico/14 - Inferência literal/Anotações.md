## Exemplo da requisição

Para entender melhor o que está acontecendo, temos um código que simula uma requisição, desse código o TS identificou o seguinte erro:

```
O argumento do tipo 'string' não é atribuível ao parâmetro do tipo '"GET" | "POST"'.ts(2345)
```

O problema é que a variável method está com o valor "GET" agora, mas ela pode ser reatribuida depois e ai será enviado para o parâmetro da função.

### Como resolver?

Uma das soluções seria criar um type chamado Methods, definir os tipos literais dele e ai colocar esse type na variável method, dessa forma, mesmo que method fosse reatribuído posteriormente, daria erro porque o type Methods só aceita GET ou POST e nada além disso.

### Usando em Objetos

Para usar nos objetos fazemos algo parecido, criamos um type (RequestDetails) e dentro dele definimos as propriedades, então na variável req que terá o objeto que será utilizado nos parâmetros da função eu coloco que o tipo dele será o type que foi criado (RequestMethods).

Isso é Inferência Literal.
