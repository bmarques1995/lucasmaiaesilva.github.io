
Fala galera mais esforçada do Brasil.

Continuando com a série sobre MongoDB vamos dar uma aprofundada na Série, deixar um pouco  somente os conceitos de lado e começar a ver mais exemplos práticos da coisa.

## JSON

Como já vimos anteriormente, o formato de dados utilizado pelo Mongo é o [BSON](http://bsonspec.org/), mas esse formato é gerenciado pelo próprio Mongo, o formato de dados que usamos para trabalhar com ele é o formato JSON que funciona como uma espécie de 'client side' do BSON.

JSON é um acrônimo para Javascript Object Notation, quando nos referimos a um objeto, nos referimos a um tipo de estrutura de dados da linguagem, basicamente um objeto pode conter atributos e métodos. A sintaxe de um objeto em javascript segue a notação de `{chave: valor}`.

{% highlight js linenos %}
var pessoa = {
	nome: 'Lucas',
	sobrenome: 'Maia',
	idade: 25,
	peso: 78,
	altura: 1.78,
	nomeCompleto: function(){
		return nome + ' ' + sobrenome;
	},
	comidasPreferidas: ['Hamburguer', 'Churrasco', 'Feijoada'],
	nerd: true
}
{% endhighlight %}

> Exemplo adaptado do curso [Javascript ninja](http://blog.da2k.com.br/curso-javascript-ninja/) do Fernando Daciuk. Recomendo!

Esse exemplo nos ajuda a entender melhor como é feita essa estrutura, observe que sempre criamos uma chave antes de definirmos todo e qualquer tipo de valor, esse valor pode ser do tipo `String` (linhas 2 e 3), `Number` (linhas 4, 5 e 6), `function` (linha 7), `array` (linha 10) ou `boolean` (linha 11) entre outros tipos diversos como por exemplo `null`, `undefined` etc.

### Dot Notation

Quando precisamos 'acessar' alguma informação dentro de um objeto usamos a sintaxe chamada de *Dot notation*, não é a toa que o JSON está substituindo os antigos formatos XML para utilização de WebServices e APIs, veja como é simples acessar os itens no objeto pessoa que criamos no exemplo acima.

Acessando atributos simples:

{% highlight js %}
pessoa.nome; // Lucas
pessoa.idade; // 25
pessoa.peso; // 78
pessoa.altura; // 1.78
{% endhighlight %}

Acessando functions:

{% highlight js %}
pessoa.nomeCompleto(); // Lucas Maia
{% endhighlight %}

Acessando arrays:

{% highlight js %}
pessoa.comidasPreferidas[0]; // Hambúrguer
pessoa.comidasPreferidas[1]; // Churrasco
pessoa.comidasPreferidas[2]; // Feijoada
{% endhighlight %}

Como vamos trabalhar esses dados voltados para o armazenamento em banco, vamos nos deparar com diversas situações, em algumas das vezes as *collections* de dados ficarão bem simples em sua estrutura e em outras as estruturas ficarão um tanto quanto complexas. As estruturas simples em formato JSON são chamadas de *Basic Nesting*, e as complexas de *Deep Nesting*.

### Basic Nesting

{% highlight js linenos %}
{
	produto: "notebook",
	atributos: { tipo: "Mac", caro: true },
	estoque: 5
}
{% endhighlight %}

Como você pode ver é uma estrutura bem simples de dados. Assim como sua leitura também é simples.

### Deep Nesting

{% highlight js linenos %}
[
	{
		filme: 'Madrugada dos Mortos',
		tituloOriginal: 'Dawn of the Dead',
		ano: 2006,
		generos: ['suspense', 'terror'],
		elenco: [
			{diretor: 'Zack Snyder'},
			{atores: ['Sarah Polley', 'Ving Rhames', 'Jake Weber']},
			{autor: 'George A. Romero'}
		]
	},
	{
		filme: 'Contra o Tempo',
		tituloOriginal: 'Source Code',
		ano: 2011,
		generos: ['Ação', 'Aventura', 'Suspense'],
		elenco: [
			{diretor: 'Duncan Jones'},
			{atores: ['Jake Gyllenhaal', 'Michelle M.', 'Vera Farmiga']},
			{autor: 'Ben Ripley'}
		]
	}
]
{% endhighlight %}

As *deep nestings* são estuturas um pouco mais complexas, mas não são maneiras erradas de se guardar informações, como já havia dito antes, o MongoDB é um banco de dados não relacional, então é comum encontrarmos estruturas mais complexas de dados, pois como não existe relacionamentos entre documentos é perfeitamente normal que haja muitos dados em uma mesma collection ou em um mesmo *document*.

## Conclusão

Espero que tenha ficado mais claro a sintaxe utilizada para se armazenar os dados no MongoDB, pois pressupondo isso já podemos entender as informações retornadas pelas *queries* que iremos trabalhar no próximo post da série. Gostaria de agradecer mais uma vez todos os feedbacks, vocês são demais. 