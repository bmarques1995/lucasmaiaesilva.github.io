# MongoDB - por que usar

## E vamos nós

![Vamos nós](/posts/serie-mongo-db/giphy.gif)

Primeiramente gostaria de agradecer a todos pelo feedback sobre o blog, muito obrigado, podem ter certeza que isso me motiva muito a continuar escrevendo, e dizer que estou iniciando uma série sobre MongoDB, este será o primeiro de alguns posts e dentro dessa série pretendo abordar uma base simples, porém sólida e organizada sobre o assunto.

## Definição

Antes de explicar o porque do uso dessa tecnologia, seria legal entendermos melhor sua definição.

O MongoDB é um banco de dados não relacional, quando digo que ele é "não relacional" significa que **não** relacionamos seus dados em tabelas.

O MongoDB armazena seus documentos em disco no formato [BSON](http://bsonspec.org) de serialização. BSON é a representação binária de documentos [JSON](http://json.org). Embora contenha mais tipos de dados que JSON propriamente dito.

O mongo shell é responsável por fazer essa *tradução* entre os drivers de linguagem BSON e a linguagem específica da representação do documento.

Vamos a sintaxe JSON (JavaScript Object Notation):

```js
{"chave": "valor"}
```

Por exemplo:

```js
{"nome": "Lucas"}
```

Mas é isso? Na verdade sim e não. Com base sempre nesta mesma estrutura com chave e valor podemos criar desde arquiteturas simples de dados (basic nesting), até as arquiteturas mais complexas de dados (deep nesting).

Não vamos nos atrelar ao código por enquanto, pois não é o objetivo deste post, posteriormente veremos muitos exemplos de códigos no decorrer da série.

### Schemaless

MongoDB é Schemaless, ou seja ele não possui Schema, mas como assim?

Nos Bancos de dados relacionais, são necessários que todos os dados sigam basicamente a mesma estrutura, ou seja, por exemplo, todos os alunos da escola devem possui ID, notas e Endereços etc. Já em um banco de Dados não relacional isso já não é necessário. Na verdade alguns chamam isso de Dynamic Schema.

Posso ter documentos com "formatos" variados de armazenamento.

```js
{ a: 3, b: 7},
{ a: 7, b: 9, c: 10 }
```

## Por que usar MongoDB?

E agora que já vimos algumas features, e sabemos basicamente como funciona, vamos a justificativa:

* Banco de Dados em Documentos
	* Documentos (objetos), são mapeados de uma forma mais "legível" para o programador
	* O Dynamic Schema torna o polimorfismo mais fácil
* Alta Performance
	* Os documentos incorporados e os arrays diminuem a necessidade de JOIN's (o que se torna uma grande vantagem para leitura e escrita)
	* Índices (indexes), podem ser incluídos nas chaves para incorporar documentos e arrays
* Alta Disponibilidade
	* Servidores replicados com mecanismos de recuperação automática em caso de falha
* Fácil Escalabilidade
	* Através do uso de [sharding](http://docs.mongodb.org/manual/core/sharding/?_ga=1.169117673.99856725.1429377578), são distribuídos automaticamente *collections* de dados através de máquinas
	* As leituras de dados podem ser distribuidas por servidores replicados

## Conclusão

O MongoDB é um excelente banco de Dados, e que merece ser utilizado com mais frequência para grandes aplicações, mas como nenhuma tecnologia é bala de prata, devemos saber quando usá-lo e antes disso ele deve ser entendido. Pois o modo de pensar voltado para o lado *não relacional* é basicamente o contrário dos Bancos de dados tradicionais.