# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color (para-caixas)
* outros...

## Valores

Podemos definir os valores por

* palavra-chave (blue, trasnsparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```css

    element{
        /* Keyword values */
        color:currentcolor;

        /* <named-color> values */
        color: red;
        color: blue;

        /* <hex-color> values 0-F */
        color: #090; /* RED GREEN BLUE */
        color: #090a; /* RED GREEN BLUE Transparência*/
        color: #009900; /* RED GREEN BLUE */
        color: #009900aa; /* RED GREEN BLUE Transparência*/

        /* <rgb()> values (0-255 RED, 0-255 GREEN, 0-255 BLUE, 0-100% Transparência) */
        color: rgb(255, 255, 255); /* RED GREEN BLUE */
        color: rgba(255, 255, 255, 0.6); /* RED GREEN BLUE Transparência*/
        color: rgb(255 255 255); /* RED GREEN BLUE */
        color: rgba(255 255 255 / 0.6); /* RED GREEN BLUE Transparência*/
        color: rgba(255 255 255 / 60%); /* RED GREEN BLUE Transparência*/

        /* <hsl()> values (Hue, Sturation, Lumiance, opacity) */
        color: hsl(30, 100%, 50%); /* (Hue, Sturation, Lumiance) */
        color: hsla(30, 100%, 50%, 0.6); /* (Hue, Sturation, Lumiance, opacity) */

        /* Global values */
        color: inherit; /* herança do elemento anterior */
        color: initial; /* volta a cor inicial do elemento */
        color: unset; /* consta como não definido, pega valor do contexto atual */
    }

```

## Refêrencia

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
