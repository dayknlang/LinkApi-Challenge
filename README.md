# LinkApi-Challenge </br>

![image](https://user-images.githubusercontent.com/77943169/141980693-7bbcac8f-1933-4d29-a087-8f2cc58fb381.png)


##### Desafio técnico para a empresa LinkApi referente ao processo seletivo para vagas de nível Jr.</br>

A aplicação é uma Api REST desenvolvida para o desefio da LinkApi solutions que tem como objetivo a integração entre o Pipedrive, que é uma plataforma CRM criada para facilitar a gestão de vendas de uma empresa, e o Bling, que é um sistema de gestão(ERP) para a micro e pequena empresa. 
O desafio contém os seguintes requisitos:

 1. Criar contas testes nas plataformas Pipedrive e Bling;
 2. Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido   no Bling);<br/>
 3. Criar banco de dados mongo  (existem serviços como MongoDB Atlas para criar de graça);<br/>
 4. Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total;<br/>
 5. Criar um Endpoint para trazer os dados consolidados da collection do MongoDB.

--------------------------------------
#### SEQUÊNCIA PARA CRIAR O PROJETO
--------------------------------------

.Primeiramente, faça o clone do repositório: <br/>
git clone https://github.com/dayknlang/LinkApi-Challenge.git

.Em seguinda, direcione para a pasta da aplicação:<br/>
cd LinkApi-Challenge

.Criar o arquivo package.<br/>
npm init -y

.Criar o arquivo .env com as chaves de acesso.<br/>
mkdir .env

//Gerencia as requisições, rotas e URLs, entre outra funcionalidades. <br/>
npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte. <br/>
npm install -D nodemon

//Rodar o projeto usando o nodemon. <br/>
nodemon app.js

//Instalar o MongoDB. <br/>
npm install --save mongodb

//Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação. <br/>
npm install --save mongoose

--------------------------------------
#### COMO RODAR O PROJETO BAIXADO
--------------------------------------

//Instalar todas as dependencias indicada pelo package.json. <br/>
npm install

//Rodar o projeto usando o Nodemon. <br/>
nodemon app.js<br/>
******

✅ <b>Tecnologias utilizadas</b> <br/>

![image](https://user-images.githubusercontent.com/77943169/141980087-f0de7aec-fc88-47a3-b054-2d49e6be194a.png)
<br/>
![image](https://user-images.githubusercontent.com/77943169/140412888-ca47b652-1b92-4d98-9678-519966716af5.png)
<br/>
![image](https://user-images.githubusercontent.com/77943169/141980238-459a1aa6-f1d2-482a-93a4-d2abfde3fe6b.png)
<br/>
![image](https://user-images.githubusercontent.com/77943169/137235402-1b218f64-f4e5-40b7-9752-bf779186b6a0.png)
<br/>
![image](https://user-images.githubusercontent.com/77943169/137235431-7b983686-d3df-4e1a-a805-c5b46e8f4fed.png)
<br/>
![image](https://user-images.githubusercontent.com/77943169/134592899-dd7d250b-f72c-4816-9386-453701ed6fba.png)
<br/>
![image](https://user-images.githubusercontent.com/77943169/140413705-114486b6-4b78-48ec-92c2-ef21e774665c.png)
<br/>
*******
ℹ️ <b>Base para fontes<b/>
  
  - https://developers.linkapi.solutions/docs/pipedrive <br/>
  - https://developers.linkapi.solutions/docs/bling <br/>
  - https://pt.stackoverflow.com/ <br/>
  - https://www.npmjs.com/package/react-responsive-carousel <br/>
  - https://www.mongodb.com/ <br/>
  - https://www.pipedrive.com/pt <br/>
  - https://www.bling.com.br/ <br/>
 *******
<br/>

✅ <b>Licença<b/>

![image](https://user-images.githubusercontent.com/77943169/134589674-675ceb99-479a-43e8-9c45-2067aa0d3c85.png) <br/>
Tais informações são fornecidas sob a licença do [MIT.](https://github.com/vhesener/Closures/blob/master/LICENSE) 

*****
<br/>

✅ <b>Autora<b/>

Dayane Lang {♥}
<br/>
 ********


