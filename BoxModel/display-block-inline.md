## display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

**block**                           **inline**
Ocupa toda a linha, colocando o     Elemento ao lado do outro
próximo elemento abaixo desse

width e height são respeitados      width e height não são funcionam

padding, margin, border irão        Somente valores horizontais de
funcionar normalmente               mardin, padding e border


exemplos:

block: `<p> <div> <selection>, todos os headings <h1><h2>...`

inline: `<a> <stromg> <span> <em>`

```html

    <div>como a div é block o texto de fora dela ficara embaixo dela</div>Texto inline

```