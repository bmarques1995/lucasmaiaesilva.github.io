---
layout: post
title: "MongoDB arquitetura e funcionamento"
date: 2015-10-26 14:53:45
image: '/assets/img/thumbs/mongodb.png'
description: "Entendendo as features do MongoDB e sua arquitetura"
tags:
categories:
- MongoDB
twitter_text: "Post explicando como funciona o mongoDB "
introduction:
---

Olá galera, atendendo a milhares de pedidos, surge então nosso segundo post da série sobre mongoDB, neste post vou explicar um pouco sobre mais sobre a sua essência, arquitetura e funcionamento. Vamos nessa.

![Vamo nessa](/assets/img/posts/serie-mongo-db/vamonessa.gif)

## Funcionamento

![funcionamento do mongoDB](/assets/img/posts/serie-mongo-db/mongoDBschema.jpg)

Vamos dar uma olhada em seu funcionamento básico, primeiramente temos um *app*, esse app pode ser escrito em qualquer linguagem compatível com o mongoDB (nodejs, Python, Java, entre outras), porém além da linguagem esse app deve possuir o *driver* que funciona como uma espécie de plugin da aplicação que é o middleware entre o banco e a aplicação, ou seja, o que vai conectar a aplicação ao mongoDB.

Na parte com a cor azul mais claro da imagem podemos ver a representação de alguns "clientes", esses clientes fazem requests para sua aplicação, portanto esses intitulados "clientes" podem ser browsers, outras aplicações, etc, podem ser qualquer coisa que necessite daquele serviço naquele momento, eles podem estar consumindo a sua REST API por exemplo.

Como mencionado, a aplicação conecta-se então ao mongoDB através do driver, e executa as operações requeridas tais como: recuperar dados, operações de CRUD, e o mongoDB retorna operações como por exemplo, o status daquela operação.

Ao entrar em estado de "hosting" o mongod entra em cena, que nada mais é que o gerenciador de processos do MongoDB. Ele gerencia "requests" de dados, acesso e algumas outras operações de acesso que funcionam em background.

É assim que esses componentes trabalham juntos, basicamente temos a aplicação no servidor interagindo diretamente com os clientes, e quando a aplicação precisa de alguma informação ou precisa guardar alguma informação ela  se comunica com o mongoDB que fica em um estado de *listening* para *requests* em andamento e ela responde apropriadamente quando esses *requests* estão completos.

E por último, mas não menos importante nós temos o mongo shell, que é uma ferramenta muito útil para executarmos várias "tarefas administrativas" como por exemplo dar uma olhada prática no que existe no banco de dados, fazer leituras em *collections* etc.

## Comparativo de functions e arquitetura com Mysql

Se você vem do mundo do banco de dados relacional, vai se sentir mais confortável com as nomeclaturas usadas no decorrer da série após das uma olhada nas analogias adotadas para fazer esse comparativo.

Temos o seguinte comparativo de estrutura:

![Comparativo de estrutura](/assets/img/posts/serie-mongo-db/structure.png)

### Collections

As collections tem um conceito similar ao de tables no Mysql, a collection representa um conjunto de informações armazenadas em comum, essas informações são bem mais "completas", uma vez que os bancos de dados não relacionais possuem uma junção de informações muito maior que os relacionais.

Por exemplo um blog em um Schema de Mysql teriam as seguintes tabelas:

* Posts
* Categorias
* Posts_Categorias
* Autor
* Comentários
* Tags
* Posts_tags

Enquanto isso o MongoDB poderia muito bem concentrar tudo isso em um único arquivo, uma vez que essas informações possuem conexões umas com as outras. Nesse caso ficariam todas em uma única collection de dados.

### Documents

Cada elemento dentro da collection é considerado um *document*, e a soma de TODOS os documents dentro da mesma estrutura de dados formam a collection, segue um exemplo de um document, usando o mesmo exemplo de criação de um blog.

{% highlight js linenos %}
{
	'title': 'MongoDB arquitetura e funcionamento',
	'body': 'conteúdo do post',
	'autor': 'Lucas Maia e Silva',
	'tags': ['banco de dados', 'NoSQL', 'DBA'],
	'comentarios': [
		{'autor': 'Diego', 'body': 'esse post tá muito foda'},
		{'autor': 'Pedro', 'body': 'Lucas você é o melhor blogueiro do mundo! #SQN'}
	],
	'data': '26/10/2015',
	'imgPost': '/assets/img/mongoDB.png'
}
{% endhighlight %}

### Campos ou fields

Também conhecidos como chaves, é a representação nomeada no qual atribuímos algum valor a elas. Similar ao conceito de *column* no Mysql.

### Embedded documents

Similar aos Joins do Mysql, são documentos que para serem "acessados" geralmente usamos as funções de pipeline do aggregate (será explicado no decorrer da série) para se obter algum tipo de retorno.

Creio que o mais complicado no MongoDB seria mesmo o "modo de pensar" e estruturar seus documentos, uma vez que são quase nulas o número de dependências entre diferentes estruturas de informações.

Se você está iniciando nesse mundo novo de noSql existe uma série muito boa de posts do [Suissa](https://twitter.com/osuissa), que aborda esse tema MongoDb - Como mudar seu jeito relacional de pensar [parte 1](http://nomadev.com.br/mongodb-como-mudar-seu-jeito-relacional-de-pensar/) e [parte 2](http://nomadev.com.br/mongodb-como-mudar-seu-jeito-relacional-de-pensar-parte-2/).

## Conclusão

Este post foi criado com o intuito de explicar melhor, o funcionamento de algumas features do mongoDB, pois os próximos post da série serão mais técnicos (com mais código), e sem uma visão do processo como um todo (mesmo que superficial), seria mais difícil o bom entendimento dos próximos itens da série. Enfim, volto em breve com mais uma sequência. Deixe seu comentário sobre esse post, como eu expliquei muitas teorias pode ser que eu tenha me perdido e falado alguma besteira também, e, se isso aconteceu, não deixe de me informar estou aqui pra isso. :)