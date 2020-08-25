import React from 'react';
import './App.css';


const Header = () => {
  return(
    <header>
      <ul>
        <li><a href="http://192.168.0.13:3000/home">Home</a></li>
        <li><a href="http://192.168.0.13:3000/produtos">Produtos</a></li>
      </ul>
    </header>
  )
}

const Home = () => {
  return(
    <main>
      <Titulo>Home</Titulo>
      <p> Essa é a Home do site</p>
    </main>
  )
}


const Titulo = (props) => {
  return (
    <h1 style={{color:'green'}}>
      {props.children}
    </h1>
  )
}
const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return(
    <div>
      <Titulo>Produtos</Titulo>
      <p> Essa é a Página de produtos</p>
      {
        produtos.map( ({nome, propriedades}) => (
          <div key={nome}>
            <h2>{nome}</h2>
            <ul>
              { 
                propriedades.map( propriedade => (
                  <li key={propriedade}>
                      {propriedade}
                  </li>
                ))
              } 
            </ul>
          </div>
        ))
      }
    </div>
  )
}

const App = () => {
  const { pathname } = window.location;
  let Component;

  if(pathname === '/produtos'){
    Component = Produtos;
  }else{
    Component = Home;
  }
  
  return(
    <main>
      <Header/>
      <Component/>
    </main>
  );
}

export default App;
