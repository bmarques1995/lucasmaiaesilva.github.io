---
layout: post
title: "MongoDB arquitetura e funcionamento"
date: 2015-10-26 14:53:45
image: '/assets/img/thumbs/mongodb.png'
description: "Entendendo as features do MongoDB e sua arquitetura"
tags:
categories:
twitter_text:
introduction:
---

Olá galera, atendendo a milhares de pedidos, surge então nosso segundo post da série sobre mongoDB, neste post vou explicar um pouco sobre mais sobre a sua essência, arquitetura e funcionamento. Vamos nessa.

![Vamo nessa](/assets/img/posts/serie-mongo-db/vamonessa.gif)

## Funcionamento

![funcionamento do mongoDB](/assets/img/posts/serie-mongo-db/mongoDBschema.jpg)

Vamos dar uma olhada em seu funcionamento básico, primeiramente temos um *app*, esse app pode ser escrito em qualquer linguagem compatível com o mongoDB (nodejs, Python, Java, entre outras), porém além da linguagem esse app deve possuir o *driver* como plugin da aplicação que é o middleware entre o banco e a aplicação, ou seja, o que vai conectar a aplicação ao mongoDB.

Na parte com a cor verde mais clara da imagem podemos ver a representação de alguns clientes, esses clientes fazem requests para sua aplicação, portanto esses intitulados "clientes" podem ser browsers, outras aplicações, etc, podem ser qualquer coisa que necessite daquele serviço naquele momento, eles podem estar consumindo a sua REST API por exemplo.

Como mencionado, a aplicação conecta-se então ao mongoDB através do driver (mongod), e executa as operações requeridas tais como: recuperar dados, operações de CRUD, e o mongoDB retorna operações como por exemplo, o status daquela operação. 

É assim que esses componentes trabalham juntos, basicamente temos a aplicação no servidor interagindo diretamente com os clientes, e quando a aplicação precisa de alguma informação ou precisa guardar alguma informação ela  se comunica com o mongoDB que fica em um estado de *listening* para *requests* em andamento e ela responde apropriadamente quando esses *requests* estão completos.

E por último, mas não menos importante nós temos o mongo shell, que é uma ferramenta muito útil para executarmos várias "tarefas administrativas" como por exemplo dar uma olhada prática no que existe no banco de dados, fazer leituras em *collections* etc.

## Comparativo de functions e arquitetura com Mysql

Se você vem do mundo do banco de dados relacional, vai se sentir mais confortável com as nomeclaturas usadas no decorrer da série após das uma olhada nas analogias adotadas para fazer esse comparativo.

Temos o seguinte comparativo de estrutura:

![Comparativo de estrutura](/assets/img/posts/serie-mongo-db/structure.png)

E o seguinte comparativo de funções:

![Comparativo de funcionalidades](/assets/img/posts/serie-mongo-db/functions.png)

## Conclusão

Este post foi criado com o intuito de explicar melhor, o funcionamento de algumas features do mongoDB, pois os próximos post da série serão mais técnicos (com mais código), e sem uma visão do processo como um todo (mesmo que superficial), seria mais difícil o bom entendimento dos próximos itens da série. Enfim, volto em breve com mais uma sequência. :)