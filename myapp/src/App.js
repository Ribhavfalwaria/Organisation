
import './App.css';
import Home from "./components/Home"
import Login from './components/Login';
import Register from './components/Register';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const UserContext = React.createContext({
  userName: '',
  setUserName: () => { },
});
function App() {
  const [userName, setUserName] = useState('');
  const value = React.useMemo(
    () => ({ userName, setUserName }),
    [userName]
  );
  return (

    <div className="App">
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/register' element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
export { UserContext }

