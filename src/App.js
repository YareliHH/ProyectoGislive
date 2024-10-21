import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//compartidos
import LayoutEncabezado from './Componentes/Compartidos/LayoutEncabezado';
import PaginaPrincipal from './Componentes/Inicio/PaginaPrincipal';
import PaginaAdministrativa from './Componentes/Inicio/PaginaAdministrativa';
import PaginaCliente from './Componentes/Inicio/PaginaCliente';
import RecuperarContrasena  from './Componentes/RecuperarContraseña';

//inicio
import Registro from './Componentes/Inicio/registo.jsx';
import Login from './Componentes/Inicio/login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutEncabezado><PaginaPrincipal /></LayoutEncabezado>} />
        <Route path="admin" element={<LayoutEncabezado><PaginaAdministrativa/></LayoutEncabezado>} />
        <Route path="/cliente" element={<LayoutEncabezado><PaginaCliente /></LayoutEncabezado>} />
        <Route path="/login" element={<LayoutEncabezado><Login /></LayoutEncabezado>} />
        <Route path="/registro" element={<LayoutEncabezado><Registro /></LayoutEncabezado>} />
        <Route path="/recuperar_password" element={<RecuperarContrasena />} /> 

        
      </Routes>
    </Router>
  );
};

export default App;
