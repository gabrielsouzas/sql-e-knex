# 📚 sql-e-knex

Repositório criado para estudos de **SQL** e **Knex.js**, baseado no curso da [Udemy](https://www.udemy.com). Este projeto tem como objetivo explorar os fundamentos de queries SQL, integrações com bancos de dados relacionais e a utilização do **Knex.js** como query builder no Node.js.

---

## 🚀 O que é o Knex.js?

[Knex.js](https://knexjs.org/) é um **query builder SQL para Node.js**, projetado para trabalhar com diversos bancos de dados relacionais como:

- PostgreSQL
- MySQL / MariaDB
- SQLite3
- Oracle
- Microsoft SQL Server

Com o Knex, você pode escrever queries de forma programática, utilizando JavaScript ao invés de SQL puro, o que facilita a leitura, manutenção e abstração das operações com banco de dados.

### ✨ Benefícios do Knex.js

- Sintaxe simples e intuitiva
- Compatível com múltiplos bancos de dados
- Migrations para versionamento do schema do banco
- Seeds para popular dados de teste
- Query builder poderoso com suporte a joins, subqueries e mais

---

## 🛠 Tecnologias utilizadas

- **Node.js**
- **Knex.js**
- **MySQL**
- **JavaScript**

---

## 📁 Estrutura do projeto

```
sql-e-knex/
├── knexfile.js         # Configurações do Knex
├── migrations/         # Migrations do banco de dados
├── seeds/              # Arquivos de seed para popular dados
├── src/
│   └── index.js        # Arquivo principal de execução
├── package.json
└── README.md
```

---

## 📦 Como rodar o projeto

1. Clone este repositório:

```bash
git clone https://github.com/gabrielsouzas/sql-e-knex.git
cd sql-e-knex
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados no `knexfile.js`.

4. Crie as tabelas com as migrations:

```bash
npx knex migrate:latest
```

5. Popule com dados de teste (opcional):

```bash
npx knex seed:run
```

6. Execute o projeto:

```bash
node src/index.js
```

## Comandos importantes

Criar uma migration que vai conter os dados da tabela, ou seja, vai ser o arquivo responsável pela criação dos dados da migration ao executar o comando de migrate em si.

```shell
npx knex migrate:make 'create_users'
```

Executar uma migration a partir das migrations criadas em `migrations`.

```shell
npx knex migrate:latest
```

---

## 📘 Referência do curso

Curso completo de SQL e Knex.js disponível na [Udemy](https://www.udemy.com).

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
