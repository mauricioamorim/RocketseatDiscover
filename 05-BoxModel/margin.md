# Margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentagem>` | auto

```css 

    div{
        /* shorthead */
        margin: 12px 16px 10px 4px;
        margin: 12px 16px 0; /* 12px top, 16px left, 0px bottom */
        margin: 8px 16px;
        margin: 8px;
    }

```

* Cuidado com margin collapsing (top se junta ao bottom)

quando o elemento um está com margin-bottom de 5px e o
de baixo está com margem-top de 5px, a distância entre eles não será de 10px e sim de 5px. O margin-collapse impede q seja somado os dois valores.

https://developer.mozilla.org/en-US/docs/Web/CSS/margin