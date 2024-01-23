/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('professores').del()
  await knex('professores').insert([
    {nome: 'Bom dia e companhia', email: 'Teste@gmail.com' ,telefone: '(011)40028922' ,nascimento: '2095-01-04'},
    {nome: 'Companhia do Bom dia', email: 'Testado@gmail.com' ,telefone: '08007777000' ,nascimento: '2212-12-03'},
    {nome: 'Sem bom dia companhia', email: 'Testei@gmail.com' ,telefone: '40042222' ,nascimento: '2100-09-01'}

  ]);
};
