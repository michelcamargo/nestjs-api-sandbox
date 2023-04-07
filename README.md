# Nest.js walkthrough
#### Aplicação REST API [Nest.js](https://github.com/nestjs/nest) baseada em Node.js


## Descrição
Aplicação back-end progressiva e escalável de finalidade educacional, voltada para o uso eficiente do paradigma SSR (server-side rendering).

---
## Considerações iniciais
#### Tecnologias
A base deste projeto faz uso de algumas tecnologias de terceiros que garantem seu funcionamento e integridade, são eles: 

> **[Prisma](https://www.prisma.io/)**: Gerencia e controla a base de dados, configurada atualmente como [Postgresql](https://www.postgresql.org/about/)
> <br>
> **[Swagger](https://swagger.io/)**: Diponibiliza a documentação das rotas disponíveis na API
> <br>
> **[Jest](https://jestjs.io/)**: Framework para testes unitários e automatizados
> <br>
> **[Docker](https://www.docker.com/)**: Virtualiza sistemas operacionais para entrega da aplicação em pacotes (containers)

#### Configuração de ambiente:
O projeto requer algumas variáveis de ambiente e configurações outras configurações sensíveis para funcionamento, as quais são definidas nos arquivos 
```.env``` e ```docker-compose.yml``` localizados no diretório raíz do projeto.
<br>
Os arquivos ```.env.example``` e ```docker-compose.yml.example``` podem ser encontrados na raíz do projeto e 
devem ser usados como exemplo de configuração do ambiente para execução da aplicação.

---

## Instalação da aplicação

```bash
$ npm install
```


## Scripts de execução

```bash
# Desenvolvimento
$ npm run start
```

```bash
# Desenvolvimento em watch mode
$ npm run start:dev
```

```bash
# Produção
$ npm run start:prod
```

## Scripts de teste

```bash
# Testes unitários
$ npm run test
```

```bash
# Testes ponta a ponta (e2e)
$ npm run test:e2e
```

```bash
# Testes metrificados
$ npm run test:cov
```

---


## Licença
[Michel Camargo](https://kamilmysliwiec.com) - 2023 - Todos os direitos reservados.
