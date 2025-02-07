## outrDir

É o caminho para onde vai o arquivo JS compilado.

```
"outDir": "./public/assets/js"
```

## rootDir

Basicamente é a mesma coisa de incluir uma pasta no includes.

```
"rootDir": "./src"
```

Como a pasta raiz (root) é a src, se criarmos uma pasta dentro de src e dermos o comando tsc, o root vai levar em consideração todas as pastas e subpastas de root e criará o arquivo js no destino que está configurado no outDir.

Perceba que a subpasta libs que foi criada dentro de src, foi enviada para a pasta assets/js depois de converter.

É bom para manter a estrutura de pastas e subpastas tanto no ambiente de desenvolvimento quanto no ambiente público.
