# Pokerdex

Pokerdex é uma aplicação web desenvolvida para permitir que os jogadores de Pokémon TCG criem e gerenciem seus próprios baralhos. Utilizando a API oficial do Pokémon TCG, os usuários podem explorar uma vasta coleção de cartas para montar baralhos personalizados, seguindo regras específicas de composição.

## Funcionalidades

- [✔️] **Lista de Baralhos**: Os usuários podem visualizar todos os seus baralhos criados, com opções para criar, remover, editar e visualizar detalhes.
- [✔️] **Criação de um Baralho**: Interface intuitiva para nomear e adicionar cartas ao baralho, respeitando as regras de quantidade e unicidade.
- [✔️] **Detalhes do Baralho**: Visualização detalhada do baralho, incluindo a contagem de Pokémon e cartas de treinador, além da diversidade de cores e tipos.

## Tecnologias Utilizadas

- **Angular 16+**: Framework escolhido para o desenvolvimento da SPA (Single Page Application).
- **Tailwind CSS**: Utilizado para estilização rápida e responsiva.
- **Infragistics**: Biblioteca UI para Angular, empregada para enriquecer a interface do usuário com componentes de alta qualidade.
- **API Pokémon TCG**: Fonte de dados para as cartas disponíveis, permitindo a busca e inclusão no baralho.

## Requisitos Implementados

- [✔️] Utilizar novas diretivas do Angular '@if" (angular v17).
- [✔️] Implementação de virtualização para listas extensas, garantindo performance.
- [✔️] Evitar componentes vazios, garantindo que todos tenham funcionalidade.
- [✔️] Uso de Standalone Components, seguindo as melhores práticas do Angular.
- [✔️] Aplicação de Signals para comunicação entre componentes sem acoplamento direto.
- [✖️] Uso de Infragistics para componentes UI, melhorando a experiência do usuário.
- [✔️] Navegação leve e intuitiva, sem sobrecarregar o usuário com carregamentos pesados.
- [✔️] Persistência dos dados em memória, com estratégias para manter a consistência durante a navegação.

## Como Executar

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta do projeto e execute `npm install` para instalar as dependências.
3. Utilize o comando `ng serve` para iniciar o servidor de desenvolvimento.
4. Acesse `http://localhost:4200/` no seu navegador para visualizar a aplicação.

## Desenvolvimento e Arquitetura

Este projeto foi desenvolvido com foco na modularidade, reusabilidade e manutenibilidade do código. A arquitetura foi planejada para facilitar a expansão futura, tanto em termos de funcionalidades quanto de manutenção ou atualização de tecnologias.

## Observacoes
Nao foi utilizado o Infragistics na esperanca de uma entrega de qualidade sem comprometer o prazo maximo para o desenvolvimento do projeto. Sendo assim, foi utilizado a biblioteca Oficial do Google, o Angular Material.
