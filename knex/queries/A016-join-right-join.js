/*
-- Seleciona users.id, profiles.id, profiles.bio
-- profiles.description, users.first_name
-- da tabela users (tabela da esquerda é opcional)
-- unindo com a tabela profiles (todos os registros da tabela da direita)
-- quando a condição u.id = p.user_id for satisfeita
-- onde users.first_name terminar com "a"
-- ordena por users.first_name decrescente
-- limita 5 registros
SELECT u.id as uid, p.id as pid,
p.bio, u.first_name
FROM users as u
RIGHT JOIN profiles p
ON u.id = p.user_id
WHERE u.first_name LIKE '%a'
ORDER BY u.first_name DESC
LIMIT 5;
*/
const knex = require('../../knex/config/database');

const select = knex('users as u')
  .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
  .rightJoin('profiles as p', 'u.id', 'p.user_id')
  .orderBy('u.id', 'asc')
  .limit(5);

console.log(select.toString());

select
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
