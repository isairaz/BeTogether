import './App.css';
import { createContext, useEffect, useState } from 'react';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Exercice from './components/Exercice.js'
import DND from './components/DND'
import CreateP from './components/CreateP';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


export const UserSession = createContext()


function App() {

  const [userData, setUserData] = useState({ username: "", token: "", isLoggedIn: false })

  const getSessionFromBrowser = async () => {
    try {
      let data = JSON.parse(localStorage.getItem("userSession"))
      if (data) {
        setUserData({...userData, username: data.username, token: data.token, isLoggedIn: true})
      }
    }
    catch  (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSessionFromBrowser()
  }, [])

  let UserContext = { userData: userData, setUserData: setUserData }
  return (
    <UserSession.Provider value={UserContext} >
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={!userData.isLoggedIn ? <Navigate replace to='/login' /> : <Navigate replace to="/home" />}>
            </Route>
            <Route exact path="/login" element={!userData.isLoggedIn ? <Login /> : <Navigate replace to="/home" />} />
            <Route exact path="/Home" element={!userData.isLoggedIn ? <Navigate replace to='/login' /> : <Home />}>
            </Route>
            <Route exact path="/Register" element={<Register />}>
            </Route>
            <Route exact path="/Exercice" element={<Exercice />}>
            </Route>
            <Route exact path="/DND" element={<DND />}>
            </Route>
            <Route exact path="/CreateP" element={<CreateP />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserSession.Provider>

  );
}

export default App;
