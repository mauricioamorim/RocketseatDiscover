# HTML 5 Semântico

## As tags
Elas que irão ajudar a criar um HTML semântico, pois algumas tags tem significados especifícos e orientações claras sobre onde devem ficar na página e o motivo dela existir

Exemplo:

```html
    <!-- com semântica ruim -->
    <p>
        Nós (programadores), somos pagos para resolver problemas, não para memorizar soluções.
        - Mayk Brito
    </p>
    <!-- com uma semântica melhor -->
    <blockquote>
        Nós (programadores), somos pagos para resolver problemas, não para memorizar soluções.
        <cite>- Mayk Brito</cite>
    </blockquote>
```

## Etendendo os significados

* Como autor da página, é sua responsabilidade entender os significados dos elementos.
* Muitas vezes é simples, pois o HTML não possui um leque gigante de elementos
* Algumas vezes é complexo de se entender alguns elementos.


Saiba que:
Alguns elementos, você irá usar em todos os documentos que você criar, e alguns, talvez você nunca precise utilizar.

Em muitos casos, a marcação do conteúdo é uma questão de gosto pessoal e será diferente de autor para autor.

Exemplo

```html

    <!-- Exemplo chat 1 -->
    <p>Beth says</p>
    <p>Hello</p>
    <p>Sam says</p>
    <p>Hi!</p>

    <!-- Exemplo chat 2 -->,
    <div class="chat">
        <dt>Beth says</dt>
        <dd>Hello</dd>
        <dt>Sam says</dt>
        <dd>Hi!</dd>
    </div>

    <!-- Exemplo chat 3 -->,
    <blockquote>
        <cite>Beth says</cite>
        <p>Hello</p>
    </blockquote>
    <blockquote>
        <dt>Sam says</dt>
        <dd>Hi!</dd>
    </blockquote>

```

Melhorar a semântica é o foco do HTML 5

Sempre buscaremos regras e padrões para aprimorar a estrutura do documento.