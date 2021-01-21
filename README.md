# **Typer-Game**

Jogo de digitação com contagem regressiva.

Ao iniciar é gerado uma frase aleatória e o usuário tem que preencher o campo input com a mesma frase antes do tempo acabar.

No final, é apresentado uma mensagem de sucesso ou de fracasso, de acordo com os resultados que o usuário obteve ao jogar.

<br/>

## REQUISITOS FUNCIONAIS

Como o jogo deve funcionar:


- Deve conter um botão onde o jogo será iniciado através dele.
  - O botão no início deve ser apresentado com o nome '**INICIAR**'
  - Ao clicar no botão:
     > O nome do botão deverá mudar para '**REPETIR**'

     > A frase deverá ser gerada

     > A frase deverá ter sempre 50 caracteres

     > O input deverá ser selecionado automaticamente para digitação

     > Ao digitar no input, se a frase estiver correta conforme for sendo digitada, as letras devem ficar **VERDE**; se estiver incorreta, devem ficar **VERMELHO**
  - O botão '**REPETIR**' deve reiniciar o jogo.

- Deve conter um '**CONTADOR DE CARACTERES**' que identifica o que foi digitado em comparação ao total de caracteres da frase
  - Ao digitar no input:
     > O Campo '**COUNTER**' deve alterar a contagem de acordo com a alteração dos caracteres

     > O Campo '**COUNTER**' deve alterar de cor de acordo com o preenchimento: Se a frase estiver correta conforme for sendo digitada, o counter deve ficar **VERDE**; se estiver incorreta, deve ficar **VERMELHO**

     > Caso o usuário conclua a frase corretamente antes do tempo acabar, deve disparar o '**ALERTA**' de sucesso

- Deve conter um '**TIMER**' regressivo
  - Ao iniciar o **TIMER**:
     > Deve sempre começar com 15seg

     > Caso o TIMER conclua antes do usuário terminar de digitar a frase, deve disparar o '**ALERTA**' de fracasso

- Deve conter uma boz de '**ALERTA**' que será responsável pelo feedback ao usuário
  - Ao apresentar o '**ALERTA**':
     > Em caso de '**sucesso**' deve apresentar uma box verde com a mensagem: _"Parabéns! Você conseguiu concluir o desafio!"_

     > Em caso de '**fracasso**' deve apresentar uma box vermelha com a mensagem: _"Ops, não foi dessa vez mas não desista! Clique em 'INICIAR' para iniciar o jogo novamente."_

<br/>
<br/>

## REQUISITOS NÃO-FUNCIONAIS

Requisitos técnicos para a criação deste jogo:

  > Conhecimento básico em javascript

  > Conhecimento básico em html

  > Editor de texto (recomendado: [VS Code](https://code.visualstudio.com))

  > Navegador (recomendado: [Chrome](https://www.google.com/chrome/?brand=BNSD&gclid=CjwKCAiA6aSABhApEiwA6Cbm_-5IHZlKfx2ak8xJuC61wbsfDEDP8lPGFnvK8sXaceNDz74nVnhV3hoCM7UQAvD_BwE&gclsrc=aw.ds))

  > [Bootstrap](https://getbootstrap.com)

  > [Font Awesome](https://fontawesome.com)