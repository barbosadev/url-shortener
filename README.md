# URL Shortener

Este é um projeto de encurtador de URLs desenvolvido com o framework [NestJS](https://nestjs.com/).

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## Configuração
Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente (você pode usar o arquivo .env.production.example como referência):

```
NODE_ENV="development"
DB_HOST="seu_host_de_banco_de_dados"
DB_USERNAME="seu_usuario_de_banco_de_dados"
DB_PASSWORD="sua_senha_de_banco_de_dados"
DB_NAME="nome_do_seu_banco_de_dados"
DB_PORT="5432"
```

## Executando a aplicação

### Rodando o Postgres com Docker
Para rodar o banco usando Docker, execute:
```
docker-compose up
````

### Modo de desenvolvimento
Para rodar a aplicação em modo de desenvolvimento, execute:
```
npm run start
```

### Modo de observação
Para rodar a aplicação em modo de observação (com hot-reload), execute:
```
npm run start:dev
```

### Modo de produção
Para rodar a aplicação em modo de produção, execute:
```
npm run start:prod
```


<!-- Testes
Testes unitários
Para rodar os testes unitários, execute:

Testes de ponta a ponta (e2e)
Para rodar os testes de ponta a ponta, execute:

Cobertura de testes
Para gerar o relatório de cobertura de testes, execute:

Docker
Construindo a imagem Docker
Para construir a imagem Docker da aplicação, execute:

Rodando a aplicação com Docker
Para rodar a aplicação usando Docker, execute:

docker-compose up -->