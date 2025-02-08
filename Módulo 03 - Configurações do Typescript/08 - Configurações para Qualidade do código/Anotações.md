## noUnusedLocals

Avisa quando tiver uma variável que foi criada e não está sendo utilizada (nível local).

Essa configuração assim como seu nome já diz, só serve para variáveis locais, se criar uma variável em escopo global, esse erro some porque o TS assume que como a variável é global, ela pode ser utilizada mais a frente.

## noUnusedParameters

Avisa quando tenho um parâmetro que não está sendo utilizado, funciona da mesma forma que a noUnusedLocals, só que com parâmetros.

## noImplicitReturns

Seu uso é opcional, com ele ativo o TS passa a mostrar um erro se não tiver um return explícito, como no if o return é implícito, o TS acusará erro.

### Importante!

Lembre-se que se o qualquer uma dessas 3 configurações estiverem ativas junto do noEmitOnError, o arquivo não será compilado.
