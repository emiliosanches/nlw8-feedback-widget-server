# Feedget - Widget de coleta e armazenamento de feedbacks 

Esse sistema foi desenvolvido durante a oitava edição do evento Next Level Week, realizado pela [Rocketseat](https://www.rocketseat.com.br).

O sistema consiste em uma [aplicação web](https://github.com/emiliosanches/nlw8-feedback-widget-web), um [servidor HTTP](https://github.com/emiliosanches/nlw8-feedback-widget-server) e um [aplicativo mobile](https://github.com/emiliosanches/nlw8-feedback-widget-mobile) que se comunicam via HTTP utilizando JSON como formato de dados. Além de um banco de dados relacional PostgreSQL.  
<br>

#### 🔧 Features
* Seleção de tipo de feedback entre "Problema", "Ideia" ou "Outro"
* Inserção de captura de tela da página atual
* Armazenamento de feedbacks recebidos em banco de dados
* Redirecionamento de feedbacks para endereço de e-mail do administrador da aplicação

#### 💡 Melhorias futuras
* **Server (back end)**
  - [ ] Melhorar o corpo HTML do e-mail de feedback
  - [ ] Validação de requests e tratamento de exeções
  - [ ] Dashboard de feedbacks recebidos:
    - [ ] Autenticação
    - [ ] Endpoint autorizado de listagem de feedbacks

* **[Web (front end)](https://github.com/emiliosanches/nlw8-feedback-widget-mobile)**:
  - Seleção de tema light/dark
  - Dashboard de feedbacks recebidos:
    - Tela de login
    - Tela de listagem de feedbacks

* **[Mobile App](https://github.com/emiliosanches/nlw8-feedback-widget-mobile)**
  - Seleção de tema light/dark
  - Adição de spash screen

## 🌐 Server (back end)

#### 🖥️ Endpoints
* POST /feedbacks - salva um feedback no banco de dados e envia para o e-mail definido
  - Request body:
  ```json
    {
      "type": "FeedbackType", // "BUG" | "IDEA" | "OTHER"
      "comment": "Descrição do feedback",
      "screenshot": "data:image/png;base64,..." // Print da tela em base64
    }
  ```
<br>

#### 👨‍💻 Tecnologias e bibliotecas
* [Express](https://expressjs.com/pt-br/) para construção do servidor e definição de rotas e middlewares
* [Prisma ORM](https://www.prisma.io/) para execução de SQL e mapeamento de entidades para objetos
* [Nodemailer](https://nodemailer.com/about/) para envio de e-mails com os feedbacks recebidos
* [Jest](https://jestjs.io/pt-BR/) para realização de testes untários
* [SWC](https://swc.rs/) como transpilador typescript para os testes em Jest
<br>

#### 🚀 Executando o projeto
* `git clone https://github.com/emiliosanches/nlw8-feedback-widget-server`
* `cd nlw8-feedback-widget-server`
* `yarn` ou `npm install`
* Crie um arquivo chamado `.env` na raíz do seu repositório com o seguinte conteúdo:
```env
DATABASE_URL='{CONNECTION_URL}'
```
* Substitua `{CONNECTION_URL}` pela URL de conexão com seu banco de dados. Ex: `postgresql://user:password@localhost:5432/database_name`
* `npx prisma migrate dev` ou `yarn prisma migrate dev` para rodar as migrations
* `yarn dev` ou `npm run dev` para iniciar o servidor em modo de desenvolvimento
* `yarn build` ou `npm run build` para transpilar o código para JavaScript (output: /dist)
* `yarn test` ou `npm run test` para executar os testes unitários
<br>

#### 🔗 Repositórios relacionados
* [Web (front end)](https://github.com/emiliosanches/nlw8-feedback-widget-server)
* [Aplicativo mobile](https://github.com/emiliosanches/nlw8-feedback-widget-mobile)
