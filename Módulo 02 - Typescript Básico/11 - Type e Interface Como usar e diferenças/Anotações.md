## Type Próprio

Sempre que for criar um type próprio, utilize o padrão PascalCase, ou seja, se o item tem mais de um nome, a primeira letra de cada palavra é maiúscula.

### Porque criar types próprios?

Imagine que você tem um objeto com no mínimo 30 propriedades, como sabemos, precisamos definir o type de cada propriedade no parâmetro da função, então para não ter que fazer isso, utilizamos o método de types próprios, onde criamos um type com todas as propriedades do objeto e em seguida passamos o type no parâmetro, dessa forma o parâmetro pegará todas as propriedades que temos no type (muito parecido com Interface em Orientação a objetos).

### Interface

È mais utilizado em objetos.

Também usa o PascalCase.

Funciona EXATAMENTE igual ao Type.

### Diferenças entre type e interface

A principal diferença é que uma vez que você cria um tipo usando o type ele não é alterável, já com o interface é possível, como adicionar uma nova propriedade por exemplo.

Imagine a seguinte situação:
Você criou um tipo lá no início do código, mas lá na frente precisou criar uma nova propriedade, com o interface podemos adicionar a nova propriedade (igual a extensão de classe do JS), já com o type não é possível pois dará erro de duplicidade, se quiser adicionar uma propriedade no type, terá que ir onde ele se encontra no código e colocar dentro dele manualmente.
