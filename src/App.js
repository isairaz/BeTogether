import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Exercice from './components/Exercice.js'
import DND from './components/DND'
import CreateP from './components/CreateP';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="wrapper">
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />}>
            </Route>
            <Route exact path="/DND" element={<DND />}>
            </Route>
            <Route exact path="/Home" element={<Home />}>
            </Route>
            <Route exact path="/Register" element={<Register />}>
            </Route>
            <Route exact path="/Exercice" element={<Exercice />}>
            </Route>
            <Route exact path="/CreateP" element={<CreateP />}>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>  
    
  );
}

export default App;
