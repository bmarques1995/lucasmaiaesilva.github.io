
## Introdução

Recentemente precisei implementar uma "modal box" em minha [página de portfolios do blog](http://lucasmaiaesilva.com.br/sobre/), e tive um trabalhinho para fazê-lo, até que achei um post muito maneiro e prático para o processo. Então resolvi documentar o problema e não fazer mais disso um problema para mim, e espero que ajude a você também.

Vamos lá.

Em algumas das vezes quando estamos criando layouts ou protótipos, nos deparamos com a situação onde temos que criar uma nova página simplesmente para mostrar poucas informações, ou até mesmo para mostrar detalhes de alguma feature em um site/sistema web. Para resolver esse tipo de problema, muitas vezes a melhor solução é a criação de um modal.

A janela em modal é uma janela que aparece como um elemento secundário (filho) no sistema para enfatizar algo contido ou requerido pelo seu elemento primário (pai). No quesito Web, é comum associarmos o modal como uma janela pop-up por exemplo.

Na maioria das vezes, as janelas em modal suportam informações críticas então por isso, temos a prática de usar Javascript na criação do modal, mas o uso do Javascript na maioria das vezes não é a melhor solução para isso.

Vamos a criação:

## HTML

```html
<a href="#abrirModal">Open Modal</a>

<div id="abrirModal" class="modal">
  <!-- conteúdo do modal aqui -->
</div>
```

Primeiramente criamos um link, esse link é referenciado por `abrirModal` é importante que ele venha com o prefixo `#` pois simboliza que estamos referenciando por id. 

Em seguida é só criar um elemento que irá armazenar esses elementos. No caso do exemplo utilizamos a `div`, mas você pode usar `section` ou qualquer outro elemento HTML que te seja mais favorável.

Juntamente com a referência do id criamos uma classe `modal` que será o que iremos usar pra estilizar nosso elemento.

```html
<a href="#abrirModal">Open Modal</a>

<div id="abrirModal" class="modal">
  <a href="#fechar" title="Fechar" class="fechar">x</a>
  <h2>Janela Modal</h2>
  <p>Esta é uma simples janela de modal.</p>
  <p>Você pode fazer qualquer coisa aqui, página de Login, pop-ups, ou formulários</p>
</div>
```

Dentro do modal criamos o botão de fechar, como esse botão sentencia um outro id, não precisamos fazer mais nada com relação a mecânica das informações, pois ao clicar em fechar, trocamos o id de `abrirModal` para `fechar` essa troca já faz a mágica acontecer.

## CSS

Agora que temos a nossa estrutura HTML, podemos estilizar nossa janela modal.

```css
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: rgba(0,0,0,0.8);
  z-index: 99999;
  opacity:0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;
}
```

As linhas `2 até 6`, são para posicionar o modal afixadamente no centro da tela. A comando da linha `8` serve para sentenciar o background, escurecendo o fundo para enfatizar a janela, que irá aparecer centralizada na tela. Na linha `9` a propriedade `z-index` assegura que a janela irá aparecer por cima das outras, como se fosse um sistema de camadas do Photoshop. A linha `10` seta a opacidade do modal, removendo sua visibilidade por *default* e as linhas `11 a 13` são os comandos de transição, para que essa mudança de transição tenha um *timing* apropriado e não ocorra do nada.


### Funcionalidades e aparência

Primeiramente precisamos formatar nossa classe modal para que no momento em que ela estiver evidênciada ela apareça na tela. Lembra da opacidade 0 anteriormente? Ela serve pra isso. Vamos ao código.

```css
.modal:target {
  opacity: 1;
  pointer-events: auto;
}
```

A pseudo-classe `:target` representa um único elemento, se existir algum `id` fragmentado na URL, ela será formatado conforme os atributos passados no formato da classe acima. Para saber mais sobre o `:target` [clique aqui](https://developer.mozilla.org/pt-BR/docs/Web/CSS/%3Atarget).

A propriedade `pointer-events` permite autores controlarem sob qualquer circustancia(se houver) um elemento gráfico particular podendo ser o alvo do evento do mouse. Ela configurada como `auto` significa que o mouse irá tratar todos os eventos não evidenciados como simples partes do site, ou seja, nosso modal será uma parte do site, assim como todo o restante dele. Para saber mais sobre `pointer-events` [clique aqui](https://developer.mozilla.org/pt-BR/docs/Web/CSS/pointer-events).

Podemos também para finalizar, estilizar nossa modal para que ela fique mais apresentável usando o nosso bom e simples `css`.

```css
.modal > div {
  width: 400px;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  background: #fff;
}
```

![Modal box estilizado](/posts/criando-modal/modal-estilizado.png)

#### estilizando botão de fechar

```css
.fechar {
  position: absolute;
  width: 30px;
  right: -15px;
  top: -20px;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  background: #ff4545;
  border-radius: 50%;
  font-size: 16px;
  color: #8d0000;
}
```


Veja como fica a arte final.

![arte final modal box](/posts/criando-modal/arte-final.png)

Referência para este post [aqui](http://www.webdesignerdepot.com/2012/10/creating-a-modal-window-with-html5-and-css3/).

## Onde usar modal boxes

Agora que já aprendemos um jeito prático de fazê-los vamos a uma breve introdução de onde podem ser aplicados.

### Formulários de Login

Modal boxes são muito úteis para formulários de registro, pois o usuário não tem aquela terrível sensação de que está sendo "empurrado" para outra página sem necessidade, causando uma boa impressão aos visitantes.

![formulario de login em modal](/posts/criando-modal/modal_login.png)

### Display imagens / vídeos

Um outro excelente modo de se usar modal é para mostrar imagens e vídeos (também conhecido como lightbox), permite que o usuário visualize de maneira mais focalizada o conteúdo de seu site sem abandonar a página.

![modal lightbox](/posts/criando-modal/modal_lightbox.png)

### Feedback ao usuário em geral

Creio que essa seja a principal utilidade do modal, os chamados alerts dessa maneira são totalmente customizáveis e usados nos principais projetos atualmente.

![modal alert](/posts/criando-modal/modal_alerts.png)

## Conclusão

As janelas em modal são realmente de fato muito úteis, porém como nenhuma tecnologia é bala de prata, deve-se saber exatamente quando e como utilizá-las, existem algumas situações que definitivamente não devemos ceder ao modal. Espero ter cumprido minha missão de auxiliá-los ou lembrá-los de algo presente no processo de criação. :)