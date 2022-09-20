# Border

* não esquecer que a borda tambem acrescenta pixels a largura ou
altura do elemento e que para vc ter o valor real vc tem que usar 
o 'box-sizing: border-box'

- value `<border-style>` | `<border-width>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<legth>`
    - color: `<color>`

```css
div{
    width: 100px;
    height:100px;
    /* 
        atenção, sem o box-sizing: border-box 
        a lagura da div vai ser de 110px pq a borda faz a div aumentar.
    */
    border: 5px; 

    /*
        Para ter a largura ou altura exata do elemento, use:
    */
    box-sizing: border-box;

    /* shorthand */
    border-top: solid 2px;

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;
}

```


# outline

- difere em 4 sentidos do border
    - Não modifica o tamanho da caixa, pois não é parte do Box Model
    - Poderá ser diferente de retangular
    - Não permite ajustes individuais
    - Mais usado pelo user agent para acessibilidade



https://developer.mozilla.org/en-US/docs/Web/CSS/border