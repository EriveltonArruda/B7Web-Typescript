## Situação

Imagine que você quer que a função aceite somente o nome do parâmetro e que a idade seja opcional, por exemplo, o usuário só passou o nome e não mandou a idade.

Podemos fazer uma validação na própria função, então se a idade !== undefined (se tiver idade), ele vai exibir a mensagem com nome e idade normalmente, se não mandar idade, terá outra mensagem.

Mas na implementação estou mandando nome e idade, então vai dar erro, como deixar idade opcional então?

Simples, só colocar uma interrogação depois da propriedade e antes dos dois pontos, dessa forma essa propriedade será opcional.
