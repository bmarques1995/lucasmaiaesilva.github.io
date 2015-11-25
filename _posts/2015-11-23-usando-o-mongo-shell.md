---
layout: post
title: "Usando o Mongo Shell"
date: 2015-11-23 09:44:51
image: '/assets/img/thumbs/mongodb.png'
description: 'Aprendendo a setar e usar o Mongo Shell'
tags:
categories:
- MongoDB
twitter_text:
introduction:
---

## Introdução

Fala galera, vamos com mais um post de MongoDB, se você é novo no Blog e deseja acompanhar a série desde o início pode fazê-lo clicando [aqui](http://lucasmaiaesilva.com.br/series).

Como dito anteriormente na série agora vamos iniciar com os posts mais técnicos, porque já abordamos superficialmente os assuntos mais teóricos, então vamos lá.

## Mongo Shell

Iremos usar o Mongo Shell para testar query por query nos próximos posts da série, para isso basta que você tenha feito a [instalação](https://docs.mongodb.org/manual/installation/) do MongoDB em sua máquina e também o `mongod` ativado em sua máquina, pois é ele que faz o "host" para acessar o banco, em outras palavras é ele quem levanta o serviço do Mongo, o banco de fato. Para fazer isso abra duas janelas ou abas e execute os comandos.

Na primeira janela/aba do terminal:

{% highlight bash %}
mongod
{% endhighlight %}

Esse comando ativa o mongod.

Em seguida vamos ativar o Mongo Shell:

{% highlight bash %}
mongo
{% endhighlight %}

É importante que você siga essa sequência, pois o Mongo Shell não funciona sem o mongod aberto, pois como dito anteriormente o `mongod` é o serviço que vai nos permitir acessar e usar o banco, então ficamos basicamente assim:

[![mongo e mongodb](/assets/img/posts/serie-mongo-db/mongo-mongod.png)](/assets/img/posts/serie-mongo-db/mongo-mongod.png)

Na esquerda temos o log do `mongod` onde temos informações do que está acontecendo com o servidor como por exemplo, quantas conexões foram abertas, inserções e consultas etc. Para saber mais sobre o mongod [clique aqui](https://docs.mongodb.org/manual/reference/program/mongod/).

Na direita temos o `mongo shell` que é o local onde iremos digitar os comandos e onde iremos seguir nossa jornada não relacional. Para ter uma melhor visualização da imagem clique nela.

Bom agora que já vimos como configurar. Vamos aos comandos.

## Comandos Mongo Shell

O primeiro comando que devemos entender é o `showdbs`, como o nome diz ele retorna todos os Bancos de Dados existentes em sua máquina.

{% highlight bash %}
$ show dbs
# blog     0.078GB
# test     0.078GB
# escola   0.078GB
{% endhighlight %}

Em seguida usamos o comando `use` seguido do nome do banco de dados que queremos acessar.

{% highlight bash %}
$ use escola
# switched to db escola
{% endhighlight %}

> obs: Se não existir um banco de dados com o nome passado por parâmetro depois do use, o MongoDB cria um novo Banco com o nome referenciado.

Depois de acessado o banco podemos ver quantas *collections* existem naquele banco.

{% highlight bash %}
$ show collections
# professores
# alunos
# eventos
{% endhighlight %}

É importante evitarmos e se possível, aniquilarmos o número de dependências entre as collections. Pois estamos trabalhando em um modo não relacional lembram?

Legal, mas e se eu tiver os arquivos prontos para o banco mas em um arquivo separado. Como faço para importar esses dados?

## Importando database no MongoDB

A sintaxe para importar os dados no MongoDB é: 

`mongoimport -d [nomeDB] -c [nomeCollection] [arquivo.js]`

{% highlight bash %}
mongoimport -d curso -c turmas turmas.js
{% endhighlight %}

Ao executarmos o comando acima, o Mongo Shell procura o arquivo `turmas.js` e o importa, criando também o banco `curso` e a *collection* `turmas` caso não haja nenhum.

Para saber mais sobre o mongoimport [clique aqui](https://docs.mongodb.org/v2.4/reference/program/mongoimport/#bin.mongoimport).

## Exportando database no MongoDB

Para exportar os dados a sintaxe é basicamente a mesma, porém com devemos informar o caminho do arquivo.

`mongoexport -d [nomeDB] -c [nomeCollection] --out [dirExport/arquivo.js]`

{% highlight bash %}
mongoexport -d curso -c turmas --out backups/01-10-2015/turmas.json
{% endhighlight %}

Para saber mais sobre o export [clique aqui](https://docs.mongodb.org/manual/reference/program/mongoexport/).

Podemos também adicionar uma query aos comandos se quisermos pegar ou exportar somente parte do arquivo, isso mesmo, eu sei é genial.

{% highlight bash %}
mongoexport -d sistema -c usuarios -q "{ email: 'lucasmaiaesilva@gmail.com' }" --out backup/lucas.json
{% endhighlight %}

Se você ainda não sabe trabalhar as queries de consulta, não se preocupe pois o próximo post da série irá explicar isso com muito mais detalhes. Mas resumindo o exemplo acima irá varrer toda a *collection* usuarios e pegar o *document* ou os *documents* que tiverem o campo de email lucasmaiaesilva@gmail.com.

## Conclusão

Este post foi criado para explicar melhor a estrutura do workflow do Mongo através do Mongo Shell, pois entender isso, é extremamente importante para testarmos nossas queries. Se tiverem alguma dúvida mandem nos comentários, pois a partir daqui, usaremos muito essa estrutura do Mongo Shell. É isso, nos vemos na próxima.