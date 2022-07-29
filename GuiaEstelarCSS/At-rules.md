# At-rules (At em inglês significa arroba)

* Esta relaciondo ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

- @import /* incluir um CSS externo dentro de um arquivo .css */
- @media /* regras condicionais para dispositivos */
- @font-face /* tipos de fontes externas */
- @keyframes /* Animação */


exemplos:
```css

@import url('http://local.com/style.css');

@media (min-width: 300px) {
    h1{
        color: blue;
    }
}

@font-face {
    /* aqui vai a regra */
}

@keyframes nomeDaAnimacao {
    /* aqui vai a regra */
}

```
