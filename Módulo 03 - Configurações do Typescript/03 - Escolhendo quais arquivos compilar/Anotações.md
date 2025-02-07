## exclude

Criaremos uma opção além das opções padrões que vem no arquivo, criaremos um exclude e um include, dentro do exclude vou colocar o que não será compilado (arquivos ou pastas).

Geralmente fazemos isso quando temos uma extensão que não queremos traduzir, por exemplo:

Temos uma extensão de arquivo chamada .dev.ts que contém dados que não queremos traduzir, então utilizamos algo chamado wildcard, dessa forma:

```
"*.dev.ts"
```

Isso significa: exclua todo arquivo que tiver .dev.ts.

Caso queira fazer isso em todas as pastas que achar, coloque o comando:

```
"**/*.dev.ts"
```

### Projeto Node

Existe uma pasta chamada node_modules em todo projeto Node, para excluir essa pasta na compilação só colocar

```
"node_modules"
```

### include

Basicamente colocamos nele tudo que queremos incluir na compilação.

Geralmente é utilizado para pasta.
