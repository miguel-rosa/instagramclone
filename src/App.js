import React from 'react';
import './App.css';

import UserContext from './components/UserContext/UserContext';

import Header from './components/Header/Header'
import Feed from './pages/Feed/Feed';

const App = () => {
  
  /* Usar useEffect para fazer uma chamada e pegar os dados do usuário */
  const user = {
    'id': 1,
    'username': 'miguel'
  }



  return(
    <UserContext.Provider value={user}>
      <Header />
      <Feed />
    </UserContext.Provider>
  );
}

export default App;
