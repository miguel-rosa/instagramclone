import React from 'react';
import './App.css';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
    ativo:true
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
    ativo:false
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
    ativo:true
  },
];


const mario = {
  cliente:'Mario',
  idade:31,
  compras: [
    { nome:'Notebook', preco:'R$ 2500' },
    { nome:'Notebook', preco:'R$ 2500' },
    { nome:'Notebook', preco:'R$ 2500' }
  ],
  ativa:true
}

const luana = {
  cliente:'Luana',
  idade:21,
  compras: [
    { nome:'Notebook', preco:'R$ 2500' },
    { nome:'Notebook', preco:'R$ 2500' },
    { nome:'Notebook', preco:'R$ 100' }
  ],
  ativa:false
}

const Array1 = () => {
  const dados = mario;
  const total = dados.compras.map( item => 
      Number(item.preco.replace('R$ ', '')) 
  ).reduce((a,b) => a+b);

  return (
    <section> 
      {/* produtos.filter(produto => ( produto.preco > 1500 ))*/} 
      <p> Nome:{dados.cliente} </p>
      <p> Idade: {dados.idade}</p>
      <p> Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>
      {dados.ativa ? 'Ativa' : 'Inativa'}
        </span></p>
      <p> Total Gasto: {total}</p>
      <p> {total > 6000 && 'Você está gastando demais' }</p>
    </section>
  )
};

export default Array1;
