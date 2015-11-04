---
layout: post
title: "Grids Semânticos com Jeet"
date: 2015-11-03 18:35:04
image: '/assets/img/thumbs/jeet.jpg'
description:
tags:
categories:
twitter_text: "Usando Jeet com Stylus"
introduction:
---

Olá amiguinhos!

Depois de um breve período de tempo, resolvi voltar a escrever e hoje vou escrever sobre um tipo de tecnologia muito produtiva e performática de se usar, o *Jeet*.

## Grids semânticos

Sabe quando você usa o Bootstrap por exemplo e sai colocando aquela tsunami de classes em seus elementos HTML? Pois é esses *presets* são oriundos do próprio framework e funcionam mais ou menos assim: 

{% highlight html linenos %}
<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>
<div class="row">
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
  <!-- Optional: clear the XS cols if their content doesn't match in height -->
  <div class="clearfix visible-xs-block"></div>
  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
</div>
{% endhighlight %}

O código acima iria gerar um resultado mais ou menos assim:

![Bootstrap Renderizado](/assets/img/posts/jeet/bootstap-render.png)

Bom esse pelo menos é o jeito tradicional de se usar o bootstrap.

![Mas aí eu te pergunto](/assets/img/posts/learn-english/ai-eu-te-pergunto.jpg)

Será que chamar TODOS esses *presets* dentro do arquivo css é a **melhor** maneira de se fazer?

Foi pensando nisso que surgiram os [semanthic grids](http://www.smashingmagazine.com/2011/08/the-semantic-grid-system-page-layout-for-tomorrow/) ou grids semânticos.

A proposta desses sistemas de grids é usar **somente** o que for necessário dentro da página para formatar os elementos do nosso HTML. Isso é possível graças ao uso dos pré-processadores que "renderizam" os arquivos css dessa maneira. Mas como assim?

Veja um exemplo:

![estrutura básica de uma página html](/assets/img/posts/jeet/html-basic-structure.png)

Suponhamos que precisaríamos de criar uma página semelhante a estrutura mostrada acima, um header, uma coluna maior que será o article e na mesma linha uma sidebar, e em baixo um footer também em bloco.

Nosso HTML ficaria mais ou menos assim.


{% highlight html linenos %}
<body>
	<header>
		Cabeçalho
 	</header>
	<article class="content">
		Article
	</article>
	<aside>
		Sidebar
	</aside>
	<footer>
		Rodapé
	</footer>
</body>
{% endhighlight %}

Nesse exemplo usarei o Stylus juntamente com o Jeet, nosso arquivo ficaria assim:

{% highlight sass linenos %}
header
   display block
   width 100%
.content
   col(10/12)
aside
   col(2/12)
footer
	display block
	width 100%
{% endhighlight %}

Uma ressalva para as linhas 5 e 7 que substituem as classes `col-xs-10` e `col-xs-2` do bootstrap, respectivamente. Viu como é muito mais simples?

Fazendo isso, já seríamos capazes de reproduzir uma estrutura semelhante a da imagem acima, ou seja, com pouquíssimas linhas de código, já conseguimos muito resultado. Fazendo dessa maneira temos inúmeras vantagens em relação ao jeito bootstrap de fazer. São algumas delas:

1. Produtividade - Pouca escrita e muito resultado
2. Clean Code - Ou nesse caso, pré clean code
3. Performance - Uma vez que não é necessário o carregamento de diversas classes

Entre muitas outras.

### Responsividade

E para inserir um pouco de responsividade ná página? É muito fácil acrescentando o [rupture](http://jenius.github.io/rupture/) (um outro plugin do Stylus), podemos simplesmente fazer isso:

{% highlight sass linenos %}
breakpoint = 980px

header
   display block
   width 100%
.content
   col(10/12)
   +below(breakpoint)
      width 100%
      display block
aside
   col(2/12)
   +below(breakpoint)
      width 100%
      display block
footer
	display block
	width 100%
{% endhighlight %}

O comando `+below()` vem do [rupture](http://jenius.github.io/rupture/), ele recebe como parâmetro um valor que determina em qual momento ele irá mudar o comportamento da sua página, mais precisamente ele analisa a quantidade de pixels da tela do seu dispositivo e o que estiver identado como pertencente a ele será executado se for menor que a referência. Se você já tem costume de criar páginas responsivas isso não é muito diferente das convencionais *media queries*.

## Jeet

O Jeet como a própria [documentação](http://jeet.gs/) diz, é um sistema de grid para humanos, ele possui a proposta de ter uma fácil escrita para que possamos descrever uma página de grid do jeito que o ser humano faria e não como uma máquina. Com o Jeet também não precisamos nos atrelar a regras de coluna de doze, ou seja, ele possui uma maior flexibilidade para criarmos nossos grids. Vamos a algumas de suas features.

### Column ou Col

O comando `column` (também usado como `col`) talvez seja a feature mais "forte" de qualquer sistema de grid, como você pode ver nos exemplos anteriores é esse comando que cria as colunas com o espaçamento específico passado por parâmetro, juntamente com ele podemos usar alguns outros parâmetros importantes, são eles:

#### Offset

Esse comando é usado quando queremos "pular" o espaço passado por parâmetro. Segue um exemplo de sua utilização:

{% highlight bash %}
col(1/4, offset: 1/4)
{% endhighlight %}

#### Cycle

Sabe quando temos vários elementos em linha e definimos um espaçamento padrão entre eles? O que acontece é que na maioria das vezes existe um certo gargalo na lógica desse espaçamento que geralmente é resolvido pela manipulação dos elementos filhos por css, tome o próprio blog como exemplo:

[![Sistema de grid blog](/assets/img/posts/jeet/grid-blog.png)](/assets/img/posts/jeet/grid-blog.png)

A formatação da página inicial é feita com três posts por linha, e naturalmente quando se usa o `col` ele faz o espaçamento devido para deslocar os elementos em linha, porém nesse caso haverá possivelmente mais de uma linha, o que significa que devemos remover o espaço do último item do bloco para que não haja quebra desse espaçamento (para mais detalhes veja esse [vídeo](https://www.youtube.com/watch?v=roqlCwEn4iI)), a referência usada para remover esse espaço é `cycle`. Veja um exemplo de sua utilização:

{% highlight bash %}
.post
   col(1/3, cycle:3)
{% endhighlight %}

#### Uncycle

Uncycle desfaz a formatação do cycle, é bem útil quando queremos adicionar algum comportamento responsivo ao nosso site.

{% highlight bash %}
.post
   col(1/3, cycle:3)
   +tablet()
      col(1/2, uncycle:3, cycle:2)
{% endhighlight %}

Bem auto-explicativo não? Quando a página for acessada pelo tablet (breakpoint definido pelo plugin rupture), ele irá trocar os elementos do grid para dois itens do bloco ao invés de três.

### Span

O `span` possui basicamente o mesmo conceito do `col`, a única diferença é que no span não existe espaçamento.

{% highlight bash %}
span(3/12)
{% endhighlight %}

Existem outras features do Jeet, mas não vou me atentar a explicar todas aqui, pois o post ficou bem maior do que esperava, mas se você chegou até aqui é porque, assim como eu, achou interessante a sua utilização, aconselho ler a documentação em sua [página inicial](http://jeet.gs/).

## Conclusão

Quero deixar bem claro que usei o bootstrap como exemplo para explicar esse post devido a sua popularidade, mas isso se aplica a diversos outros como foundation, groundworkCSS e tantos outros que grids não semanticos. Mas não tenho nada contra a essas tecnologias. Esse post somente possui caráter explicativo, não estou aqui para falar mal de nenhuma tecnologia, somente para mostrar novas e melhores soluções para os problemas de sempre. Espero ter cumprido minha missão, qualquer dúvida / elogio / sugestão, deixe um comentário.