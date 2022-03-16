import React from 'react';
import { connect } from 'react-redux';
import './Usuario.css';

import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';

const Usuario = () => {
    return(
        <div className='paginaUsuario'>
            <LateralUsuario/>
            <div className='centro'>
                <h1 className='Letras1'>BIENVENIDO A TU AREA PERSONAL</h1>
                <div className='vistaUsuario'>
                    <h1>Puedes dirigirte a donde quieras desde la barra de navegación</h1>
                </div>
            </div>
        </div>
    );
};

export default connect((state)=>({
    credenciales: state.credenciales
}))(Usuario);