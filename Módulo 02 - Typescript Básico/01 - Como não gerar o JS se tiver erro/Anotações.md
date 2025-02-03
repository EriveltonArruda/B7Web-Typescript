O comportamento padrão do ts é gerar um arquivo JS, mesmo que tenha erro, podemos evitar que o arquivo seja gerado com erro.

Podemos fazer isso em um arquivo de configurações do TS, mas como não foi visto ainda, existe um atalho, é uma regra na verdade.

```
tsc script.ts --noEmitOnError
// Basicamente não cria um arquivo se tiver erro.
```

Como dica geral, use sempre o noEmitOnError quando for compilar.
