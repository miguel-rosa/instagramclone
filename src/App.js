import React from 'react';

import { UserStorage }  from './components/UserContext/UserContext';

import Routes from './routes';

const App = () => {
  
  return(
    <UserStorage >
     <Routes />
    </UserStorage>
  );
}

export default App;
