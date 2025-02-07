Em todas as aulas foi visto como trabalhar com arquivos, a partir de agora veremos como trabalhar em projeto, para isso precisaremos de um arquivo de configuração.

## Criar arquivo de configuração

Digite o comando:

```
tsc --init
```

Será criado um arquivo de configuração tsconfig.json.

Agora que temos esse arquivo de configuração e tivermos outro arquivo.ts, se eu mandar o comando "tsc", o arquivo de configuração vai verificar todo o projeto e todos os arquivos typescript que ele achar ele vai criar um arquivo.js.

Como não foi congifurado nada no arquivo de configuração, quando criar um arquivo JS, ele será criado na mesma pasta onde se encontra o arquivo.ts e mesmo com erro gerará o arquivo.js.

Se usar o watchMode, ele criará os dois arquivos de js.
