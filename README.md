# nlw-elogia

##  O projeto

*   A ideia do projeto é permitir que os usuários façam elogios a outros através dessa API.


## A Stack

*   Projeto Node.js usando TypeScript.
*   PostgreSQL para o BD (no projeto original é usado SQLite)


##  Start no projeto

Para rodar o projeto na sua maquina faça o clone do projeto e siga os passos:

*   Criar um Banco de dados PostgreSQL:
    *    fazer uma copia do arquivo 'ormconfig.example.json' e mudar para 'ormconfig.json' e alterar os dados de conexão para funcionar com o seu banco de dados;

*   rodar o comando: 'yarn add' para instalar as dependencias

*   rodar o comando: 'yarn typeorm migration:run' para realizar as migrations do Banco de dados

*   rodar o comando: 'yarn dev' para rodar a aplicação como desenvolvedor.