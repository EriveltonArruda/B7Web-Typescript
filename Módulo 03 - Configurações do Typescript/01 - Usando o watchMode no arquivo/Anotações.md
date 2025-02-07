Como sabemos, para usar um código typescript precisamos converter para javascript, contudo, em um projeto teremos vários arquivos de Typescript, então teríamos que converter todos os arquivos que tiverem alteração, para solucionar isso existe o watchMode.

## watchMode

Para usar o watch mode utilizamos o seguinte comando:

```
tsc src/script.ts -w
Ou
tsc src/script.ts -watchMode
```

Perceba que ao executar o comando, o terminal ficou ativo, sem deixar que você digite comandos, ele vai ficar assim mesmo, em modo de escuta, ele fica monitorando o arquivo o tempo todo.

Quando fazemos uma alteração e salvamos, automaticamente o watchMode vai compilar o arquivo JS.
