
## Introdução

Fala galera, devo pedir desculpas pois fiquei algum (muito) tempo sem postar nada, mas gostaria de me redimir criando um post, sobre um pequeno projeto que fiz há pouco tempo.

Gostaria de agradecer a todos os feedbacks que recebi por esses dias, e dois deles em específico, que foram o de [@Willian_justen](https://twitter.com/@Willian_justen) que me referenciou em sua postagem de virada de ano, e minha prima **Livia Siqueira**, que, apesar de muito nova, me disse que lê o blog e disse que se interessa pela área e quando crescer irá se tornar uma excelente programadora tenho certeza. Esse tipo de coisa me motiva muito obrigado a todos.

## FlexBox

FlexBox o que é isso afinal?

### Definição

Bom vamos ao assunto. 

> The CSS3 Flexible Box, or flexbox, is a layout mode providing for the arrangement of elements on a page such that the elements behave predictably when the page layout must accommodate different screen sizes and different display devices.

[Definição MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

Traduzindo, O CSS3 Flexible Box ou flexbox, é um modo de layout feito para alinhar os elementos dentro da página de maneira que esses elementos se comportem de maneira "previsível" quando o layout da página precisa acomodar diferentes tamanhos de tela para diferentes dispositívos.


Basicamente FlexBox é uma forma de organizar elementos na tela, setando comportamentos por grupos de maneira mais simples possível, evitando certos tipos de "gambiarras" de CSS como padding e margin (disse evitando não removendo completamente, pois ainda existem situações em que esses atributos são úteis).

> A ideia é simples: os filhos de um elemento com flexbox pode se posicionar em qualquer direção e pode ter dimensões flexíveis para se adaptar. Você pode posicionar os diversos elementos independente da sua posição na estrutura do HTML, o que é muito bom. Um dos problemas do float a sua dependência com os elementos na estrutura do HTML. Estes elementos precisam estar em uma ordem específica, se não o layout não dá certo. Com o Flexbox essa ordem não importa, isso quer dizer que você pode organizar a informação do seu HTML de beneficiando o SEO e Acessibilidade. O código da estruturação destes elementos fica mais simples e fácil de manter.

Disse Diego Eis em seu artigo no tableless [Flexbox - organizando seu Layout](http://tableless.com.br/flexbox-organizando-seu-layout/)

Como disse o filósofo Wade Wilson, "parece promessa feita por propaganda de Yogurte". Mas vejamos como é simples sua abordagem e utilização.


### Layout

Esse projeto de Layout foi feito para a criação de um Layout de um projeto de chat simples com React e Firebase (prometo escrever um post sobre esse projeto abordando ambas tecnologias), vamos a ele.

Primeiramente escrevemos o bom e velho HTML de maneira simples.

```html
index.html
<html>
	<body>
		<aside class="barra-lateral">
			sidebar
		</aside>
		<section class="conteudo">
			conteúdo
		</section>
	</body>
</html>
```

![Display Block](/posts/flexbox/display-block.png)

Bem como sabemos tanto o `aside` quanto o `section` assim como as `divs` são elementos de **bloco**, ou seja, são renderizados em linha ocupando sempre toda a linha do navegador por padrão. Mas nesse caso queremos colocar um do lado do outro correto? Então como fazemos isso?

Normalmente usaríamos uma série de `floats` e `margins` para conseguirmos o resultado desejado. Porém o flexbox veio para nos ajudar a simplificar as coisas. Veja como fica o nosso CSS.

```css
body {
	display: flex;
}
```

Fazendo isso os elementos se tornam "flexíveis", e, por padrão sua direção é em linha por causa do atributo `flex-direction` do flexbox.

> O atributo `body` é o elemento pai, portanto serão inclusos com essas características, somente os filhos dele, que no nosso caso, são `aside` e `section`

![Display Flex](/posts/flexbox/display-flex.png)

Em seguida vamos setar algumas características dos elementos `aside` e `section`

```css
body {
	display: flex;
}

aside.barra-lateral {
	width: 20%;
	background: peachPuff;
}

section.conteudo {
	flex-grow: 1;
	background: gray;
}
```

![Display Column](/posts/flexbox/display-column.png)

Atente-se ao atributo `flex-grow` na classe conteudo, você viu que anteriormente a ele definimos um tamanho ao `aside` através do atributo `width`, então ao invés de definirmos um tamanho físico ou líquido a ele, simplesmente usamos essa propriedade que permite que o elemento "cresça" atingindo o restante do espaço disponível.

E por último para finalizar o protótipo base, adicionamos ao `body` que é nosso "elemento pai" uma linha de código que dirá que o tamanho vertical do nosso projeto será o tamanho da janela do navegador.

```css
body {
	display: flex;
	height: 100vh;
}

aside.barra-lateral {
	width: 20%;
	background: peachPuff;
}

section.conteudo {
	flex-grow: 1;
	background: gray;
}
```

![Usando Flex grow](/posts/flexbox/flex-grow.png)

O valor `100vh` significa que ela irá ocupar os 100% da `viewport`, ou seja, 100% do tamanho da janela.

Agora vamos alterar novamente a estrutura do nosso html, dentro dele vamos adicionar 2 elementos filhos ao atributo com a classe `conteudo`.


```html
<body>
	<aside class="barra-lateral">
		sidebar
	</aside>
	<section class="conteudo">
		<div class="display">
			display
		</div>
		<div class="insert">
			insert
		</div>
	</section>
</body>
```

Agora que começa a lógica do flexbox. Assim como o `body` que é nosso elemento pai, podemos estilizar o `section` conteudo como `display: flex` também e isso nos dá possibilidade de usarmos todos os atributos do flex-box para estilizá-lo.

No nosso caso o elemento display usaremos para mostrar as mensagens dos usuários, e o elemento insert usaremos para criar o `input` para digitarmos o texto.

![Display flex grow e input](/posts/flexbox/content-column.png)

Como já falado por padrão do flexbox os elementos `display` e `insert` serão renderizados um do lado do outro. Para mudar isso basta acrescentar no CSS do elemento pai o atributo `flex-direction: column` assim mudamos a direção da renderizaçao.

A partir de agora fica muito interessante, assim como fizemos o conteúdo "crescer" com o flex-grow no sentido horizontal, também podemos fazê-lo no sentido vertical, assim dando uma cara nova a nossa interface do chat.

```css
section.conteudo {
	background: gray;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
	
.display {
	background: white;
	flex-grow: 1;
}
	
.insert {
	background: black;
	color: white;
	height: 40px;
}

```

Fazendo isso temos esse resultado:

![Display flex grow e input](/posts/flexbox/flex-grow-display.png)

### Alinhamento

Vamos então agora alinhar os nossos elementos.

Suponhamos que tenhamos que alinhar todo o conteúdo dentro da sidebar ao centro da div, tanto na vertical como na horizontal, para fazer isso com flexbox é muito simples, basta acrescentar as seguintes comandos ao **elemento pai** dessa div.

```css
.barra-lateral {
	display: flex;
	justify-content: center; /* alinha os itens na horizontal */
	align-items: center; /* alinha os itens na vertical */
}
```

Pronto, agora é só estilizar com nosso bom e velho css comum. Como já disse esse projeto também possui reactJS e firebase como suas tecnologias base, porém a arquitetura de seu layout foi feito exatamente como mencionado neste post. Qualquer dúvida / elogio, deixe nos comentários. :)

Arte final

![Arte Final](/posts/flexbox/final-art.png)

<div class="view-demo">
	<a href="http://lucasmaiaesilva.com.br/firebase-chat/" class="button button-3d button-caution button-rounded" target="blank">Ver o projeto</a>
	<a href="http://github.com/lucasmaiaesilva/firebase-chat/" class="button button-3d button-primary button-rounded" target="blank">Ver o código no Github</a>	
</div>
