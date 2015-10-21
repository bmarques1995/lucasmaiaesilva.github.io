---
layout: post
title: "Tecnologias que usei para criar esse blog"
date: 2015-10-21 10:19:38
image: '/assets/img/thumbs/front.png'
description: "Um breve guia sobre os framewoks e libs usadas para criação do Blog"
tags:
categories:
twitter_text: "Tecnologias usadas neste humilde Blog"
introduction:
---

Fala Galera, como tem muitas pessoas me perguntando sobre o mesmo assunto, resolvi escrever um guia sobre o que eu usei para criar esse humilde espaço.

Na realidade esse espaço resultado de um reaproveitamento de um [template](https://github.com/willianjusten/will-jekyll-template), que, assim como esse blog, é um projeto Open Source. O template foi feito por [Willian Justen](https://github.com/willianjusten), que é um programador em que me espelho muito, pois acho o jeito que ele programa muito objetivo e organizado.

## Papel e Caneta

A primeira coisa que eu fiz foi o sketch do Layout básico do blog, então resolvi postar sobre essa etapa também do processo, pois a considero a etapa mais importante de todas. Definitivamente não importa se você passar 80% do tempo de seu projeto simplesmente o planejando e os outros 20% "codando" (essa é a regra que eu criei baseada no princípio de um economista italiano chamado Vilfredo Pareto denominada lei de Pareto), mesmo assim, a sua produtividade será absurda pois assim temos uma visão completa sobre todas as etapas do processo, evitando praticamente todo o retrabalho.

Em resumo planejamento é **tudo**.

Segue uma foto que tirei do Sketch original do Blog.

[![Sketch do blog](/assets/img/posts/tecnologias-que-usei-no-blog/sketch.jpg)](http://lucasmaiaesilva.com.br/assets/img/posts/tecnologias-que-usei-no-blog/sketch.jpg)

## Photoshop

Podem me chamar de antiquado, mas acho que Design e Desenvolvimento, não se misturam. Existem diversas ferramentas mas gosto de usar somente uma ferramenta para cada lado do cérebro. Quando crio, prefiro usar ferramenta de criação e quando programo gosto de usar ferramentas de programação. Acho que a maioria dos programadores que querem fazer tudo uma etapa só, meio que se perdem diversas vezes durante o processo.

Basicamente usei o Photoshop para criar o design de como ficaria a interface do projeto.


## Jekyll

![WebSite Jekyll](/assets/img/posts/tecnologias-que-usei-no-blog/jekyll-site.jpg)

Jekyll é um gerador estático escrito em Ruby para sites/blogs simples.

Como assim estático? Bom, ele não possui banco de dados e todas as suas features são escritas no próprio código e então são geradas em seu formato final. Para que isso aconteça, é necessário seguir um template de diretórios e de arquivos em vários formatos. Por exemplo todos posts ficam no diretório `_posts`, e podem ser escritos em certos padrões de escrita como Markdown e, a partir daí são gerados seus respectivos `html's`. O projeto em Jekyll também pode ser hospedado gratuitamente pelo [GitHub Pages](https://pages.github.com/). 

Meu amigo Willian Justen fez uma série de posts explicando melhor o Jekyll e GitHub pages, são eles:

* [Porque Usar Jekyll](http://willianjusten.com.br/por-que-usar-jekyll/)
* [Perguntas e Respostas sobre Jekyll](http://willianjusten.com.br/perguntas-e-respostas-jekyll/)
* [Como ter um domínio próprio no Github Pages](http://willianjusten.com.br/dominio-proprio-no-github-pages/)

Qualquer dúvida posterior sugiro fortemente dar uma olhada na [documentação](https://jekyllrb.com/docs/home/) da ferramenta.

Se você não possui dificuldade com o inglês, sugiro que assista uma playlist de vídeos feita pelo canal DevTips chamada [How to Build a Responsive Website From Start to Finish](https://www.youtube.com/watch?v=T6jKLsxbFg4&list=PLqGj3iMvMa4KQZUkRjfwMmTq_f1fbxerI).

## Gulp

![imagem gulp](/assets/img/posts/tecnologias-que-usei-no-blog/gulp-fit.png)

O Gulp, assim como Grunt, é um automatizador de tarefas, ou seja, ele é uma ferramenta que te permite abstrair de algumas coisas mais chatinhas durante o processo de criação. Segue abaixo uma analogia de como funcionaria.

Suponhamos que ao entrar em sua sala, todos os dias, voçê antes de começar a trabalhar, tem que ligar a luz, abrir a sua janela, ligar o seu computador e abrir seu workflow.

Com o Gulp é isso que acontece, porém ele automatiza as tarefas relacionadas ao processo de desenvolvimento, mas não menos importantes, tais como por exemplo:

* Dar refresh na página toda vez que uma alteração no código-fonte é salva
* Diminuir o tamanho dos arquivos de imagem a fim de otimizá-las o máximo possível
* Minificar e concatenar todo o Javascript, CSS e Html da página
* Criar Sprites de imagens e mapeá-las para um carregamento mais performático

E entre muitas outras coisas. Se quiser saber mais sobre o gulp dê uma olhada no seu [site oficial](http://gulpjs.com/) porque vale muito a pena.


## Stylus

![Logo Stylus](/assets/img/posts/tecnologias-que-usei-no-blog/stylus-thumb.png)

Minhas folhas de estilo são escritas em [Stylus](https://learnboost.github.io/stylus/) e pré-processadas para o CSS via Gulp. Não vou me atentar a explicar muita coisa sobre isso, uma vez que tenhos planos específicos de fazer um post separado sobre essa linguagem. Sua sintaxe é muito amigável dê uma olhada no exemplo abaixo:

{% highlight sass %}
body
	background red

.container
	width 90%
	margin 0 auto
	#logo
		width 200px
{% endhighlight %}

## Conclusão

Antes de mais nada devo dizer que não fiz esse projeto com nenhum método catalogado e nem protocolado, sei que existem muitas outras maneiras diferentes de se criar esse tipo de ferramenta, se você tiver alguma outra maneira que julga ser melhor do que a minha, sinta-se a vontade para compartilhar nos comentários.

Resolvi criar essa postagem para mostrar como foi feito esse trabalho, uma vez que fiquei muito feliz com os elogios que recebi, e quis fazer esse post até mesmo como uma forma de agradecimento e porque não, de incentivo a todos os que desejam escrever coisas também.

Para os interessados TODO o [código fonte do blog](https://github.com/lucasmaiaesilva/lucasmaiaesilva.github.io) está disponível no [meu github](https://github.com/lucasmaiaesilva), mas já aviso, se forem dar uma olhada não deixe de deixar um Star e deixe também seu comentário aqui. :)