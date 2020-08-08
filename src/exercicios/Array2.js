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

const App = () => {

  const dados = produtos.filter(produto => ( Number(produto.preco.replace('R$ ', '')) > 1500 ))
  return(
    <div>
      {
          dados.map( ({id, nome, preco, cores, ativo}) => (
            <div key={id}>
              <h2>{nome}</h2>
              <p>{preco}</p>
              <ul>
                {
                  cores.map( cor => (
                  <li key={cor} style={{backgroundColor:cor, color:'#fff'}}><b>{cor}</b></li>
                  ))
                }
              </ul>
            </div>
          ))
        }
    </div>
  )
}

export default App;
