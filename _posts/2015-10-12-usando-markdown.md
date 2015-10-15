---
layout: post
title: "Usando markdown"
date: 2015-10-12 09:31:35
image: '/assets/img/thumbs/markdown.png'
description: Aprenda a usar esse simples formato de documento, fácil de ler e fácil de escrever. 
tags:
- escrita
- produtividade
categories:
twitter_text:
introduction:
---

Este é o primeiro post do blog, sei que ainda tenho muito a melhorar, mas até lá, a maioria dos meus posts serão sobre ferramentas que usei para a criação deste humilde espaço para disseminação do conhecimento, e o primeiro assunto que gostaria de abordar é o markdown (que inclusive estou usando neste momento para escrever este post), mas antes de começar gostaria de agradecer todos que fizeram isso possível, [Felipe Siqueira](https://github.com/flipggs), [willian Justen](https://github.com/willianjusten), [Marcus Silva](https://github.com/mvfsilva), [Jader Gomes](https://github.com/jjaderg), [Yan Magalhães](https://github.com/YanMagale), [Gabriel Azevedo](https://github.com/gabrielazevedo),  [Rafael Moura](http://github.com/rafaelrmou) que mantém o site [studyxnet](http://www.studyxnet.com/), e toda a galera do DevsGroup, que além de grandes amigos são ótimos programadores e podem ter certeza que ouvirão falar muito sobre essa galera.

Bom sem mais papo furado vamos dar início ao post.

## Filosofia

Segundo a [documentação](http://daringfireball.net/projects/markdown/) oficial feita por John Gruber (um dos criadores ), o Markdown foi criado para ser um padrão de documentação mais *fácil de ler* e *fácil de escrever* possível. Essa facilidade em legibilidade é resultado de um padrão de escrita estudado cuidadosamente, e criado então utilizando-se de pontuações e caracteres concatenados a escrita dando assim a formatação desejada aos itens em questão.

## Onde Usar?

Bom o Markdown pode ser usado em qualquer projeto que envolva escrita de conteúdo assim como um livro, um blog, a documentação de software, currículos, etc. 

O próprio Github, usa o Markdown para que seus usuários possam documentar seus projetos

## Sintaxe

### Títulos

{% highlight  html %}
# Este é o título principal ou <h1>
## Esté é o subtítulo ou <h2>
### Sub Subtítulo <h3>
#### <h4> 
{% endhighlight %}

### Elementos de linha

{% highlight html %}
*Este texto ficará itálico*
_Este também estará itálico_
**Este ficará em negrito**
__Este também estará em negrito__
_Você pode **combinar** eles também_
{% endhighlight %}

### Listas

#### Ordenadas

{% highlight  html %}
* Item 1
* Item 2
	* Item 2a
	* Item 2b
{% endhighlight %}

#### Não Ordenadas

{% highlight  html %}
1. Item 1
2. Item 2
	* Item 2a
	* Item 2b
{% endhighlight %}

### Imagens

{% highlight  html %}
![GitHub Logo](/images/logo.png)
{% endhighlight %}

_O que aparece entre colchetes é o que seria renderizado como o atributo **alt** do html_

### Links

{% highlight  html %}
http://github.com - link automático
[GitHub](http://github.com) - link com um texto atrelado a ele 
{% endhighlight %}

### Blockquotes (citação)

{% highlight  html %}
Seu madruga disse uma vez:

> Não há nada mais trabalhoso,
> que viver sem trabalhar

{% endhighlight %}

### código inline

{% highlight  html %}
Eu acho que não deveríamos usar a tag `<br />` nos nossos projetos
{% endhighlight %}

## Conclusão

Markdown realmente é um padrão poderoso de marcação de documentos e deve realmente ser usado quando for requisitado, pois como vimos é muito simples a sua utilização e ele também é muito bem documentado.

*Obs: não deixem de deixar um feedback nos comentários, para saber se devo continuar escrevendo e sobre qual assunto. Muito Obrigado pela atenção*


