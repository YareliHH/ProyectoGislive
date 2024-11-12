import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//compartidos
import LayoutEncabezado from './Componentes/Compartidos/LayoutEncabezado';
import LayoutEncabezadoAdmin from './Componentes/Compartidos/LayoutConEncabezadoAdmin.jsx';
import EncabezadoAdministrativo from './Componentes/Inicio/encabezadoAdministrativo.jsx';
import PaginaPrincipal from './Componentes/Inicio/PaginaPrincipal';
import PaginaAdministrativa from './Componentes/Inicio/PaginaAdministrativa';
import PaginaCliente from './Componentes/Inicio/PaginaCliente';
import Sobrenosotros from './Componentes/Inicio/sobrenosotros'; 
import VerificarCorreo from './Componentes/Inicio/verificarCorreo'; 
import RecuperarContraseña from './Componentes/Inicio/recuperarPassword';
import { ThemeProvider, useTheme } from './Componentes/Temas/themeContext';

//Admi
import Deslinde from './Componentes/Administrativo/Deslinde'; 
import PerfilEmpresa from './Componentes/Administrativo/PerfilEmpresa'; 
import Politicas from './Componentes/Administrativo/Politicas'; 
import TerminosCondiciones from './Componentes/Administrativo/Terminos'; 
import RedesSociales from './Componentes/Administrativo/RedesSociales'; 

//inicio
import Registro from './Componentes/Inicio/registo.jsx';
import Login from './Componentes/Inicio/login.jsx';


const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button 
      onClick={toggleTheme} 
      style={{ 
        marginLeft: 'auto', 
        background: 'none', 
        border: 'none', 
        cursor: 'pointer', 
        padding: '10px',
        fontSize: '1.2rem', 
        verticalAlign: 'middle', 
        lineHeight: '1.5', 
        display: 'flex', 
        alignItems: 'center', 
      }}
      aria-label="Toggle theme"
    >
      <FontAwesomeIcon 
        icon={theme === 'dark' ? faSun : faMoon} 
        style={{ color: theme === 'dark' ? 'yellow' : 'black' }}
      />
      <style>{`
        @media (max-width: 768px) {
          button {
            font-size: 1.3rem;
          }
        }
        @media (max-width: 480px) {
          button {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </button>
  );
};


const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggleButton/>
    <Router>
      <Routes>
        <Route path="/" element={<LayoutEncabezado><PaginaPrincipal /></LayoutEncabezado>} />
        <Route path="admin" element={<LayoutEncabezadoAdmin><PaginaAdministrativa/></LayoutEncabezadoAdmin>} />
        <Route path="/cliente" element={<LayoutEncabezado><PaginaCliente /></LayoutEncabezado>} />
        <Route path="/login" element={<LayoutEncabezado><Login /></LayoutEncabezado>} />
        <Route path="/registro" element={<LayoutEncabezado><Registro /></LayoutEncabezado>} />
        <Route path="/informacion/lista-quienes-somos" element={<Sobrenosotros />} /> 
        <Route path="/verificar-correo" element={<VerificarCorreo />} /> 
        <Route path="/admin/deslinde" element={<LayoutEncabezadoAdmin><Deslinde/></LayoutEncabezadoAdmin>} /> 
        <Route path="/admin/perfil" element={<LayoutEncabezadoAdmin><PerfilEmpresa/></LayoutEncabezadoAdmin>} /> 
        <Route path="/admin/politicas" element={<LayoutEncabezadoAdmin><Politicas/></LayoutEncabezadoAdmin>} /> 
        <Route path="/admin/terminos" element={<LayoutEncabezadoAdmin><TerminosCondiciones/></LayoutEncabezadoAdmin>} /> 
        <Route path="/admin/redesSociales" element={<LayoutEncabezadoAdmin><RedesSociales/></LayoutEncabezadoAdmin>} /> 
        <Route path="recuperar_password" element={<RecuperarContraseña/>} />
        
      </Routes>
    </Router>
  </ThemeProvider>
  );
};

export default App;

