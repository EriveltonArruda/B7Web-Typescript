## removeComents

Remove os comentários da versão pública (fica apenas no script.ts), isso diminui o tamanho final do arquivo.

Se deixar como true nas configurações, os comentários feitos no arquivo.ts não vão para o arquivo público, se deixar false ou deixar comentado (que é o padrão), os comentários vão para o arquivo público.

## noEmit

Basicamente não cria os arquivos finais, geralmente é colocado como true nas configurações quando queremos que o Typescript nos mostre os erros para melhorarmos nosso código.

Tem pouca utilidade prática, mas é bom saber que existe.

## noEmitOnError

Como já visto em aulas anteriores, ele não vai compilar o arquivo se tiver algum erro, isso serve para todos os arquivos, se seu projeto tiver 30 arquivos e pelo menos um arquivo estiver com erro, nenhum arquivo será compilado até que o arquivo com erro seja resolvido.
