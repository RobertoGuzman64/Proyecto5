
import './App.css';

// Aqui indicamos las direcciones de las páginas de la aplicación.
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Pedidos from './Containers/Pedidos/Pedidos';
import Peliculas from './Containers/Peliculas/Peliculas';
import Perfil from './Containers/Perfil/Perfil';
import Registro from './Containers/Registro/Registro';
import Admin from './Containers/Admin/Admin';
import Usuario from './Containers/Usuario/Usuario';

// Aqui es donde hacemos la función de navegar entre las distintas páginas de la aplicación.
function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Pedidos' element={<Pedidos/>}/>
        <Route path='/Peliculas' element={<Peliculas/>}/>
        <Route path='/Perfil' element={<Perfil/>}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Usuario' element={<Usuario/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
