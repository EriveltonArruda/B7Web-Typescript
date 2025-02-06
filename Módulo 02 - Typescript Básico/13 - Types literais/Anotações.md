## O que é?

É uma forma de definir um valor literal.

No caso de usar em uma variável é inútil porque o const já faz isso.

### Onde usar?

Ele é mais útil quando utilizado com Union Types.

### função mostrarTexto()

Para exepmlificar melhor, teremos uma função que mostra um texto alinhado, contudo se deixarmos o parâmetro de alinhamento somente como string, o typescript aceitará qualquer valor que esteja dentro de uma string.

```
function mostrarTexto(texto: string, alinhamento: string) {

}
```

Então se passar "blabla" no parâmetro do alinhamento, o Typescript aceitará porque é de fato uma string, independente do seu valor.

Para solucionar isso podemos usar Union Types junto com os Types Literals, onde definimos que o alinhamento só poderá ser "right", "left" ou "center" e nada mais além disso.

### função configurar()

Essa função receberá um objeto com duas propriedades ou então poderá receber uma string 'auto', podemos fazer isso com o type literals.

Dessa forma se for passado "automatico" no parâmetro não será aceito porque a função só aceita largura e altura como número ou 'auto' como string, qualquer coisa diferente disso não será aceito.
