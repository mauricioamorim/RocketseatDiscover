# A Cascata (cascading)

É a escolha do browser de qual regra CSS aplicar, no caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo (`inline`, `<style>` e `<link>`)
2. Especificidade (seletor `h1` é mais forte que `*`)
3. Importância (`!important`)


## Origem do estilo (inline, `<style>` e `<link>`)

Inline é mais forte(sobreescreve) que tag style 
E tag style é mais forte(sobreescreve) que > tag link

* Se o arquivo tiver mais de uma tag `<link>`, o link mais forte sempre será o ultimo a ser 
inserido no arquivo


## Especificidade ( muda dependendo do seletor a 'força' para definir a regra de estilo )

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a
serem considerados.

0 = mais fraco
1000 = mais forte

0. Universal selector, combinators e negation pseudo-class (*, :not())
1. Element type selector, e pseudo-element (h1, ::before, ::after)
10. Classes e attribute selectors([type="radio"])
100. ID selector (#id)
1000. inline <style>

exemplo:
 ```css

h1 {
    color: red;
}

/* 
    Observe que mesmo o seletor '*' vindo depois do seletor 'h1' (cascading), terá sua cor
    escrita em vermelho, pq a especificidade do 'h1' é mais forte.
*/
* {
    color: blue;
}

/* 
    Lembrando que é possivel somar os pontos de força quando se junta mais de um seletor na mesma regra força = 111 (1+10+100)
*/
h1.titulo#nome_pagina {
    color: yellow;
}

 ```

## Importância

Se usado o termo `!important` no valor de um atributo CSS, ele automaticamente se torna o estilo
q será aplicado no(s) elemento(s) selecionados:

* cuidado, evite o uso 
* não é uma boa pratica 
* quebra o fluxo natural da cascata

exemplo:
```css

    p {
        color: red!important;
    }

```