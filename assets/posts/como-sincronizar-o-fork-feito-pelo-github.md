# Sincronizando o fork feito pelo Github


Quando falamos de programação Open Source não podemos deixar de falar no Github, que hoje em dia está sendo praticamente uma "rede social de programadores" voltado para o que interessa, o código. Se você não conhece, procure, pois é uma das coisas mais importantes que um programador pode ter, com ele é possível visualizar códigos escritos por outros programadores, documentações e muito mais. E é gratis.

Quando queremos contribuir com algum projeto que não é nosso, geralmente temos que "garfar" aquele projeto (fork), e com isso todas as alterações que fazemos naquele projeto podem ser "commitadas" sem nenhum problema pois após o fork, o Github irá tratar o projeto como seu e seu repositório em um primeiro momento não se comunica com o repositório original. Para forkar o projeto basta clicar em fork.

![Fork no Github](/posts/sinc-fork-github/fork.png)

Mas aí nos deparamos com 2 problemas correto? Como eu disse anteriormente, em um primeiro momento, os dois projetos (original e o que foi feito o fork) não se comunicam então temos dois tipos de situação para sincronizá-los.

Na primeira situação, o projeto original está desatualizado em relação ao projeto em que foi feito o fork. Nesse caso o procedimento para sincronizá-los é fazer o [PR ou Pull Request](https://help.github.com/articles/using-pull-requests/). 

E na segunda situação acontece justamente o contrário. Suponhamos que você fez o contrário, você "forkou" o projeto de alguém e depois percebeu que essa pessoa atualizou o projeto original com alguma feature incrível que você não poderia viver sem. E agora como proceder?

## Configurando repositório remoto

Primeiramente executamos o comando abaixo para ver a lista de repositórios configurados em seu fork.

```sh
git remote -v
# origin  https://github.com/SEU_USUARIO/SEU_FORK.git (fetch)
# origin  https://github.com/SEU_USUARIO/SEU_FORK.git (push)
```

Vemos que como ele só possui uma referência para fetch e outra para push e ambas em seu próprio repositório temos que executar o seguinte comando para adicionar o repositório com o projeto original

```sh
git remote add upstream https://github.com/USUARIO_ORIGINAL/REPOSITORIO_ORIGINAL.git
```

Ao executar novamente o comando para listar os repositório vemos que o repositório original foi incluso no processo.

```sh
git remote -v
# origin  https://github.com/SEU_USUARIO/SEU_FORK.git (fetch)
# origin  https://github.com/SEU_USUARIO/SEU_FORK.git (push)
# upstream https://github.com/USUARIO_ORIGINAL/REPOSITORIO_ORIGINAL.git (fetch)
# upstraem https://github.com/USUARIO_ORIGINAL/REPOSITORIO_ORIGINAL.git (push)
```

Bom agora que já está tudo configurado basta sincronizar.

## Sincronizando o Fork

Primeiramente precisamos executar um comando que procure por atualizações no projeto original e as armazene em um branch local `upstream/master`.

```sh
git fetch upstream
# remote: Counting objects: 75, done.
# remote: Compressing objects: 100% (53/53), done.
# remote: Total 62 (delta 27), reused 44 (delta 9)
# Unpacking objects: 100% (62/62), done.
# From https://github.com/USUARIO_ORIGINAL/REPOSITORIO_ORIGINAL.git
#  * [new branch]      master     -> upstream/master
```

Em seguida nos asseguramos que estamos no [branch master](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) do projeto.

```sh
git checkout master
# Switched to branch 'master'
```

E para finalizar só precisamos fazer o merge de `upstream/master` para o seu branch local `master`. 

```sh
git merge upstream/master
# Updating 34e91da..16c56ad
# Fast-forward
#  README.md                 |    5 +++--
#  1 file changed, 3 insertions(+), 2 deletions(-)
```

## Conclusão

Pra quem não usa esses comandos todos os dias é praticamente impossível guardar todos (eu mesmo jamais conseguiria), então criei esse post para servir de referência, os comandos foram tirados diretamente da documentação do Github, sempre que precisar (confie em mim, você vai precisar), esse post estará aqui para te auxiliar. 