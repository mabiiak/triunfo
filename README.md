# Boas vindas ao projeto Triunfo!

Este é um projeto que foi desenvolvido durante o curso de Desenvolvimento Web na Trybe.

Neste projeto foi desenvolvido um jogo no estilo Super Trunfo! Ao utilizar essa aplicação o usuário deverá ser capaz de:

  - Criar um baralho, com o tema livre;

  - Adicionar e remover uma carta do baralho;

  - Visualizar todas as cartas que foram adicionadas ao baralho;

  - Jogar com o baralho criado.

## Habilidades
  * Ler o estado de um componente e usá-lo para alterar o que exibimos no browser

  * Inicializar um componente, dando a ele um estado pré-definido

  * Atualizar o estado de um componente

  * Capturar eventos utilizando a sintaxe do React

  * Criar formulários utilizando sintaxe JSX com as tags: `input`, `textarea`, `select`, `form`, `checkbox`

  * Transmitir informações de componentes filhos para componentes pais via callbacks

# Desenvolvimento

<details>
  <summary>
      Antes de começar a desenvolver
  </summary>

1. Clone o repositório
  * `git clone git@github.com:mabiiak/triunfo.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd triunfo`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  * Verifique que os testes estão executando:
    * `npm test` (os testes devem rodar e falhar)

3. Crie uma branch a partir da branch `master`

  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os commits do seu projeto

</details>

<details>
  <summary>
    <h2>
      Antes de começar a desenvolver
    </h2>
  </summary>

## Informações sobre o Super Trunfo
O Super Trunfo é um jogo de cartas que ficou muito popular no Brasil entre as décadas de 80 e 90, mas que faz bastante sucesso até hoje. Suas regras são bastante simples, por isso ele é considerado um jogo fácil de jogar. Apesar de ter regras simples, cada baralho  de Super Trunfo pode ter um tema diferente, o que o torna um jogo bastante divertido.

Originalmente, o jogo de Super Trunfo é formado por um baralho de 32 cartas. Cada carta representa um item relacionado ao tema do jogo. Em cada carta também existe uma lista com características daquele item e cada característica possui um valor numérico. 

Para começar o jogo, as cartas devem ser embaralhadas e divididas igualmente para cada participante. Em cada rodada cada pessoa pega somente a primeira carta do seu monte. Na primeira rodada uma pessoa escolhe qual característica quer comparar com as cartas das outras pessoas que estão jogando. Ganha quem tiver o maior número nessa característica. A pessoa que ganhou a rodada recebe as cartas das outras pessoas e escolhe qual característica quer comparar na próxima rodada. O jogo termina quando alguma pessoa tiver todas as cartas do baralho.

Em cada baralho existe uma (e somente uma) carta Super Trunfo. Essa carta ganha de todas as outras cartas do baralho, independentemente dos valores das características.

O jogo de Super Trunfo pode ser feito com praticamente qualquer tema, mas tradicionalmente os mais comuns são: carros, países, cidades ou animais.

</details>

## Requisitos

    ✅ 1. Crie o formulário que será usado para adicionar cartas ao baralho

    ✅ 2. Adicione as props necessárias ao componente de formulário 

    ✅ 3. Crie e renderize o componente Card com as props necessárias

    ✅ 4. Crie o preview da carta que está sendo criada pelo formulário

    ✅ 5. Faça a validação do botão de Salvar no formulário

    ✅ 6. Crie a função do botão salvar

    ✅ 7. Crie a validação do Super Trunfo

    ✅ 8. Exiba a lista de cartas que estão salvas no estado

    ✅ 9. Crie um botão para remover uma carta do baralho

  <details>
    <summary>
      Bônus
    </summary>

    ✅ 10. Crie o filtro pelo nome da carta

    ✅ 11. Crie o filtro por raridade da carta

    ❌ 12. Crie o filtro de Super Trunfo
  </details>

## Requisitos não avaliativos

  <details>
    <summary>
      <h2>
        Regras do Jogo
      </h2>
    </summary>

  Antes de iniciar o desenvolvimento, vamos relembrar como funciona o jogo: 
  - Primeiramente, cada pessoa deve "pegar" uma carta aleatória do seu baralho.
  - A primeira pessoa irá escolher um atributo para comparar com a carta da outra pessoa. Lembre-se que no Tryunfo os atributos podem ter nomes diferentes em cada baralho, por isso o ideal é se basear pela posição do atributo, ou seja, comparar o primeiro atributo da sua carta com o primeiro atributo da carta da pessoa rival.
  - Ganha a rodada quem tiver o número maior no atributo escolhido.
  - Ao término da rodada, cada pessoa deve "pegar" uma nova carta aleatória.
  - A cada rodada é alternada a vez de quem escolhe o atributo para comparação.

## O que será necessário
  Para poder jogar, será necessário ter desenvolvido os seguintes passos:
   1) Criar baralho com N cartas (já desenvolvido nos requisitos anteriores).
   2) Criar uma função que embaralhe as cartas e renderize a primeira carta do baralho.
   3) Criar um botão para renderizar a próxima carta do baralho.
   4) Na ultima carta, ter um botão para recomeçar o jogo, embaralhando novamente.


❌ 13. Iniciar o jogo

❌ 14. Criar botão Próxima Carta

❌ 15. Recomeçar o jogo

</details>


## Obrigada pela visita!
