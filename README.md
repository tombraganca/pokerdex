# Pokerdex
Segue o teste para ser realizado:

Para conhecermos um pouco mais do seu lado técnico, gostaríamos de propor um desafio, no qual não existe resposta certa ou errada, mas permitirá mostrar mais o seu jeito de desenvolver. 
 
A ideia é bem simples e o desafio também, gostaríamos de uma aplicação que consulte a api de pokemon TCG (https://docs.pokemontcg.io/#api_v1cards_list) e que nossos jogadores pudessem montar um baralho em cima dela. 
 
O projeto deve ser feito usando o Angular 16+, Tailwind e a biblioteca UI Infragistics, só que temos alguns requisitos obrigatórios:

Lista de baralhos

O usuário pode ver seus baralhos;  
O usuário pode criar um novo baralho;  
O usuário pode remover um baralho;  
O usuário pode editar um baralho;  
O usuário pode clicar num baralho para visualizar seus detalhes.  

## Criação de um baralho

O usuário pode colocar um nome no seu baralho;
O usuário pode inserir cartas no baralho;
O baralho tem que ter no mínimo 24 cartas e no máximo 60;
Só podem ter 4 cartas com o mesmo nome, no baralho. (Nome não id);
Após salvar o baralho voltamos para a página de lista de baralhos atualizada;
O baralho será salvo apenas em memória.

## Detalhes do baralho
O usuário consegue ver quantos pokemons e cartas de treinador existem no baralho. (atributo supertype)
O usuário consegue ver de quantas cores é o baralho, quantos types únicos existem no baralho.
 
Quanto a interface, vamos deixar a sua criatividade falar mais alto, capriche nas suas ideias, nos surpreenda.
 
Disponibilize o seu código no github ou bitbucket, não deixe de detalhar no readme do projeto, qual arquitetura, funcionalidades e ambiente de desenvolvimento utilizou.
 
Pedimos que nos envie para um Code Review em até 1 semana.
Aguardamos seu retorno e caso tenha algum problema ou dúvida nos avise.

Muito obrigada 🤞🏻☺

## Dicas importantes para a realização do teste:

Tivemos candidatos que plagiaram rs 🙄 E plagiaram uma linha de código apenas, e eles barraram, estão bem críticos com isso (sei que não vai fazer isso rs, mas só um aviso).  
[ ] - Utilizar novas diretivas do Angular  '@if" (angular v17);  
[ ] - Possui virtualização;  
[ ] - Não deixar o componente vazio;    
[ ] - Utilizar Standalone;   
[ ] - Utilizar Signals;  
[ ] - Utilizar Infragistics;  
[ ] - Deixar a navegação leve, sem ser muito pesada;  
[ ] - Não utilizar um filtro para adicionar cartas no deck, pois pode acabar prejudicando a usabilidade;  
Focar na persistência dos dados.
