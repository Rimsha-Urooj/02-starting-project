import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  
  useEffect(()=>{
      // checking the value stored in the storage of browser storage and making decisons on it.
      const storedUserLogedInInformation = localStorage.getItem('isLoggedIn');
      if (storedUserLogedInInformation === '1'){
        setIsLoggedIn(true);
      }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // to store data on browser local storage
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn: isLoggedIn,
      }}
    > 
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  
  );
}

export default App;
