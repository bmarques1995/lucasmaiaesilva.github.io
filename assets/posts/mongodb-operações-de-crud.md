
## Introdução

No post anterior vimos o que é, e como funciona o Mongo Shell, isso é importante pois é por ele que iremos trabalhar as queries do banco. Após vermos também como trabalhar com as *collections* e seus respectivos nomes, podemos usar as queries específicas de CRUD nas *collections*.

Pra quem vêm do mundo do SQL o seguinte comparativo de funções, pode ajudar a ter uma melhor ideia dessas operações:

![Comparativo de funcionalidades](/posts/serie-mongo-db/functions.png)

Este post será sobre as operações de CRUD em MongoDB, se você deseja ver a série desde o início clique [aqui](http://lucasmaiaesilva.com.br/series). 

O CRUD é um acrônimo para Create, Read, Update e Delete. São as 4 operações principais em um banco de dados. No MongoDB essas funcionalidades são:

* Create - insert()
* Read - find()
* Update - update()
* Delete - remove()

Vamos aos comandos.

### Insert

O comando insert como o próprio nome já diz insere um *document* na collection referenciada. 

{% highlight bash %}
db.alunos.insert({
	nome: "Lucas Maia e Silva",
	dataNascimento: "01/01/1990",
	notas: {
		"matematica": 100,
		"fisica": 100,
		"portugues": 0,
		"geografia": 0,
	},
	peso: 75,
	altura: 1.8,
	sexo: "M",
	pais: "Brasil",
	estado: "MG"
})
{% endhighlight %}

Como você pode perceber, a inserção se dá pelo método com a sintaxe `db.alunos.insert()`, onde o `db` é o banco de dados em que estamos no momento setado pelo `use`, o `alunos` é o nome da *collection* em seguida `insert` que nada mais é do que o nome do método que por sinal recebe um objeto JSON como parâmetro contendo os dados a serem inseridos no banco. Essa forma singular de dados é o que chamamos de *document*.

> Da mesma maneira que o `use`, quando passamos dentro do método de inserção o nome da collection, se ele não existir ela será criada pelo Mongo Shell.

### Find

Agora que já temos um documento inserido podemos usar o comando `find` para encontrá-lo.

{% highlight bash %}
$ db.alunos.find()
{ "_id" : ObjectId("564fb56c6d600fca5032d20f"), "nome" : "Lucas Maia e Silva", "dataNascimento" : "01/01/1990", "notas" : { "matematica" : 100, "fisica" : 100, "portugues" : 0, "geografia" : 0 }, "peso" : 75, "altura" : 1.8 }
{% endhighlight %}

Para indentá-lo facilitando uma melhor leitura podemos usar o método pretty.

{% highlight bash %}
$ db.alunos.find().pretty()
{
	"_id" : ObjectId("564fb56c6d600fca5032d20f"),
	"nome" : "Lucas Maia e Silva",
	"dataNascimento" : "01/01/1990",
	"notas" : {
		"matematica" : 100,
		"fisica" : 100,
		"portugues" : 0,
		"geografia" : 0
	},
	"peso" : 75,
	"altura" : 1.8,
	"sexo" : "M",
	pais: "Brasil",
	estado: "MG"

}
{% endhighlight %}

Uma outra coisa interessante de se falar é o campo `_id`, esse é o identificador de nosso documento, quando não o passamos por parâmetro no `find`, o próprio Mongo o cria.

Existe também o método `findOne` que retorna somente 1 documento, aquele com a característica mais próxima a busca referenciada. Sua sintaxe é a mesma do método `find`.

Vamos focar no método `find` que é aquele onde a busca irá retornar mais de 1 elemento em comum nos `documents`.

Como no post do Jeet, não quero que isso vire uma tradução da documentação, mas não posso deixar de citar alguns exemplos, veja-os:

{% highlight bash %}
$ db.alunos.find({sexo: "F", estado:"MG"})
# retorna todas as alunas que moram no Estado de MG
{% endhighlight %}

#### Projection

O *projection* é um objeto que passamos como parâmetro do find, com o intuito de obter somente do *document* os campos que precisamos, isso é muito útil quando temos documentos com inúmeros campos e precisamos tratar somente alguns dados, isso é ótimo para a performance.

{% highlight bash %}
$ db.usuarios.find({_id:3}, { _id:0, usuario:1, senha:1 })
# retorna somente os campos usuário e senha
{% endhighlight %}

O projection retorna somente os campos em que setamos como `1 ou true`, não é preciso colocar todos os campos do *document* no objeto como true ou false, se você não irá precisar do campo `_id` então você deve setá-lo como `0 ou false`, pois por padrão ele é tido como `true`, é importante a remoção do campo `_id` quando não for usá-lo até mesmo por uma questão de segurança.

#### gt e lt

Existem alguns tipos de chaves que usamos como uma espécie de filtos para o `find`, como por exemplo:

* `gt` (greater than) maior que
* `gte` (greater than or equals) maior ou igual a
* `lt` (less than) menor que
* `lte` (less than or equals) menor ou igual a

{% highlight bash %}
$ db.alunos.find({  notas.matematica: {$gte: 70}  })
# retorna todos os alunos que possuiram notas iguais ou superiores a 70 em matemática
{% endhighlight %}

#### regex

Você também pode usar expressões regulares nos comandos do Mongo Shell. 

{% highlight bash %}
$ db.alunos.find({  nome: {$regex: "e"}  })
# retorna todos os alunos que possuem a letra "e" em algum lugar do nome

$ db.alunos.find({  nome: {$regex: "^A"}  })
# retorna todos os alunos que começam com a letra "A" maiúsculo

$ db.alunos.find({  nome: {$regex: "e$"}  })
# retorna todos os alunos que termina com a letra "e"
{% endhighlight %}


#### operadores lógicos e / ou

Os operadores lógicos são representados pela sintaxe `$and` / `$or` e requerem um *array*, dentro desse *array* são passadas todas as condições para serem analisadas. O operador `$and` retorna o documento buscado, somente se **todas** as queries passadas forem verdadeiras. E o operador `$or` retorna o documento se pelo menos **uma** query for verdadeira.

Ex: `db.pessoas.find({  $or: [ {condição 1, condição 2} ]  })`.

{% highlight bash %}
$ db.alunos.find({  $or:[ { nome: {$gt: "D"}, email: {$exists: true} } ]  })
# retorna todos os alunos que o nome começa a partir da letra D do alfabeto 
# ou
# os alunos em que tiverem o campo de email em seu document
{% endhighlight %}

#### operadores all / in

Esses operadores existem para trabalharmos com *arrays*.

O operador `$all` retorna o documento se **todos** os itens procurados estiverem contidos na query. E o operador `$in` varre o array mostrando os documents que contenham **algum** dos itens especificados.

 {% highlight bash %}
$ db.comidas.find({  favoritas: {$all: ['hot dog', 'cerveja']}  })
# retorna os documents que possuem hot dog e cerveja dentro do array de favoritas

$ db.comidas.find({  favoritas: {$in: ['churrasco', 'Hamburguer']}  })
# retorna os documents que possuem pelo menos um dos itens no array passado
{% endhighlight %}

### Update

Existem algumas maneiras de fazer Update diretamente no *document*, uma delas é o comando `update` sem nenhuma outra feature, que atualiza o *document* para exatamente o objeto passado por parâmetro.

{% highlight bash %}
db.pessoas.update({nome: 'Lucas'},{nome: 'Lucas Maia', english: true})
{% endhighlight %}

Como você pode ver a função `update` recebe dois objetos como parâmetro, o primeiro é a query para busca, e o segundo objeto é o *replace*, ou seja, são os dados que substituirão aquele *document*.

> obs: Quando se usa o update da maneira acima, os elementos anteriores da tabela são descartados com excessão do _id

#### set

O operador `set` é usado quando queremos evitar que a substituição inteira do *document* aconteça, ou seja, quando queremos acrescentar e / ou alterar somente alguns campos no *document*, sem apagar todos os outros.

{% highlight bash %}
db.pessoas.update({  nome: 'Lucas'  },{$set: {idade:25}  })
{% endhighlight %}

#### upsert

Cria um novo *document*, caso não exista nenhum com as características passadas.

{% highlight bash %}
db.pessoas.update({nome: "George"}, {$set: {idade: 40} }, {upsert: true})
{% endhighlight %}

#### inc

Incrementa os valores ao elemento.

{% highlight bash %}
db.pessoas.update({  nome: 'Lucas'  },{$inc: {idade:1}  })
# idade agora é 26
{% endhighlight %}

#### unset

Remove os campos especificados nele.

{% highlight bash %}
db.pessoas.update({  nome: 'seu madruga'  },{$unset: {profissao:1}  })
# remove o campo profissão do document onde o nome é seu madruga
{% endhighlight %}

### Update em Arrays

Existem as seguintes maneiras de fazermos updates em um array, são elas:

#### push

O comando push acrescenta o item ao final do array.

{% highlight bash %}
db.pessoas.update({  nome: 'Lucas'  },{$push: {comidasPreferidas: 'pizza'}  })
{% endhighlight %}

#### pop

Remove itens por índice (posição) do array.

{% highlight bash %}
db.pessoas.update({  _id: 2  },{$pop: {comidasPreferidas: 1}  })
# remove o último item do array comidasPreferidas
db.pessoas.update({  _id: 2  },{$pop: {compromissos: -1}  })
# remove o primeiro item do array compromissos
{% endhighlight %}

#### pushAll

Acrescenta mais de um elemento ao array.

{% highlight bash %}
db.escritores.update({  nome: 'Paulo Coelho'  },{$pushAll: { livros_ids: [2, 5, 19, 203, 305] }  })
{% endhighlight %}

#### pull

Remove item por valor.

{% highlight bash %}
db.escritores.update({  nome: 'Paulo Coelho'  },{$pull: { livros_ids: 2 }  })
# remove o livro de id 2 do array
{% endhighlight %}

#### pullAll

Remove mais de um item no array, possui a mesma sintaxe do pushAll.

{% highlight bash %}
db.escritores.update({  nome: 'Paulo Coelho'  },{$pullAll: { livros_ids: [2, 5, 19] }  })
{% endhighlight %}

#### addToSet

Acrescenta o elemento ao array somente se ele não existir.

{% highlight bash %}
db.arrays.update({  id: 0  },{$addToSet: { a: 5 } })
{% endhighlight %}

### Multi update

Quando precisamos fazer o update em **mais de um elemento**, precisamos setar o multi update.

{% highlight bash %}
db.medicos.update({}, {$set: {titulo: "Dr"}}, {multi: true})
{% endhighlight %}

### Remove

O `remove` possui a mesma sintaxe do comando `find`.

{% highlight bash %}
db.jogadores.remove({ nome: 'Fred' })
{% endhighlight %}

> obs: Em algumas versões do MongoDB se for passado o objeto vazio como parâmetro, a collection inteira é removida

Uma outra maneira de remover a collection inteira é com o comando `drop`.

{% highlight bash %}
db.jogadores.drop()
{% endhighlight %}

## Conclusão

Posso dizer que esse é o principal post da série pois guarda os principais conceitos sobre o funcionamento do MongoDB. O criei com intuito de que seja não somente um post explicativo, mas como um post de referência também, no qual você pode pesquisar e dar uma olhada assim que precisar. Dúvidas e / ou sugestões é só deixar aqui embaixo :)