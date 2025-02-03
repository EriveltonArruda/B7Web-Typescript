## variáveis / funções duplicadas

Estava dando erro de variáveis e funções duplicadas porque o vscode reconhece o arquivo ts e o js como iguais, então caso aconteça isso, é porque você está com os dois arquivos abertos, apenas feche o arquivo de js e não aparecerão os erros.

### Estrutura de pastas

Como ts não faz parte do arquivo final, geralmente separamos o projeto entre os arquivos que vão à público e os arquivos que servem para o desenvolvimento.

- Pasta public = Arquivos finais.
- Pasta src = Desenvolvimento (arquivo ts), src significa source ou código-fonte

Como o arquivo JS estará dentro da pasta pública, precisamos compilar de novo, só que dessa vez colocando dentro da pasta correta, dessa forma:

```
tsc src/script.ts --outDir public
// outDir significa a pasta de destino final.
```

### Resolvendo o parâmetro da função calcular

O Typescript está me avisando que os parâmetros não estão bem declarados e isso pode gerar um problema, então vamos dizer para a função que ela saiba que n1 e n2 serão números, basta colocar dois pontos (:) depois de n1 e de n2 e colocar o tipo que eles serão (number).

### Erro numero1.value

Ao colocar os parâmetros como números, apareceu um erro na minha variável numero1.value

```
O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.ts(2345)
```

Isso porque todo elemento de HTML será uma string e a função só aceita número.

Para solucionar isso precisamos converter o resultado em número (seja com parseInt ou com + antes da variável numero1 e numero2);

### Erro resultado.innerHTML

```
O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322)
```

O InnerHTML sempre espera uma string.

Para resolver isso podemos pegar o resultado da função calcular e transformar em string.

## Dica final

Sempre que fizer/consertar o código typescript, sempre converta antes de testar, se o arquivo script.js já existir, ele será substituído.
