import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Exercice from './components/Exercice.js'
import Project from './components/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="wrapper">
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />}>
            </Route>
            <Route exact path="/Home" element={<Home />}>
            </Route>
            <Route exact path="/Register" element={<Register />}>
            </Route>
            <Route exact path="/Exercice" element={<Exercice />}>
            </Route>
            <Route exact path="/Project" element={<Project />}>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>  
    
  );
}

export default App;
