# LinkApi-Challenge </br>

Desafio técnico para a empresa LinkApi referente ao processo seletivo para vagas de nível Jr.</br>

A aplicação é uma Api REST desenvolvida para o desefio da LinkApi solutions que tem como objetivo a integração entre o Pipedrive, que é uma plataforma CRM criada para facilitar a gestão de vendas de uma empresa, e o Bling, que é um sistema de gestão(ERP) para a micro e pequena empresa. 
O desafio contém os seguintes requisitos:

 1. Criar contas testes nas plataformas Pipedrive e Bling.
 2. Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).
 3.Criar banco de dados mongo  (existem serviços como MongoDB Atlas para criar de graça);
 4.Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.
 5.Criar um Endpoint para trazer os dados consolidados da collection do MongoDB.

--------------------------------------
SEQUÊNCIA PARA CRIAR O PROJETO
--------------------------------------

.Primeiramente, faça o clone do repositório 
git clone https:

.Em seguinda, direcione para a pasta da aplicação:
cd 

.Criar o arquivo package
npm init -y

.Criar o arquivo .env com as chaves de acesso
mkdir .env

//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
npm install -D nodemon

//Rodar o projeto usando o nodemon 
nodemon app.js

//Instalar o MongoDB
npm install --save mongodb

//Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
npm install --save mongoose

--------------------------------------
COMO RODAR O PROJETO BAIXADO
--------------------------------------

//Instalar todas as dependencias indicada pelo package.json
npm install

//Rodar o projeto usando o Nodemon 
nodemon app.js


