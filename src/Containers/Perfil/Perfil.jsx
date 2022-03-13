import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { MODIFICAR_CREDENCIALES } from '../../redux/types';

import './Perfil.css';
import LateralUsuario from '../../Components/LateralUsuario/LateralUsuario';


const Perfil = (props) => {
    let navigate = useNavigate();
    // Hooks.
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: props.credenciales.usuario.nombre,
        edad: props.credenciales.usuario.edad,
        apellidos: props.credenciales.usuario.apellidos,
        email: props.credenciales.usuario.email,
        contraseña: props.credenciales.usuario.contraseña,
        nick: props.credenciales.usuario.nick
    })
    // Handler (Manejador).
    const rellenarDatos = (e) => {
        setDatosUsuario({...datosUsuario, 
            [e.target.name]: e.target.value})
    };
    useEffect( () => {
        if (props.credenciales.token === '') {
            navigate('/');
        };
    })
    const actualizaUsuario = async () => {
        let body = {
            nombre: datosUsuario.nombre,
            edad: datosUsuario.edad,
            apellidos: datosUsuario.apellidos,
            email: datosUsuario.email,
            contraseña: datosUsuario.contraseña,
            nick: datosUsuario.nick
        }
        let config = {
            headers: { Authorization: `bearer ${props.credenciales.token}`}
        };
        try{
            // Actualizamos los datos de Usuario en nuestra base de datos.
            let res = await axios.put(`http://localhost:5000/usuarios/${props.credenciales.usuario.id}`, body, config);
            if(res){
                // Guardamos los datos en Redux.
                props.dispatch({type:MODIFICAR_CREDENCIALES, payload: datosUsuario});
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className='paginaPerfil'>
            <LateralUsuario/>
            <div className='centro'>
                <div className='vistaPerfil'>
                    <h2 className='Letras3'>INTRODUCE TUS DATOS PARA MODIFICARLOS AQUI</h2>
                    <input className='input2' type="text" name="nombre" id="nombre" title="nombre" placeholder={props.credenciales.usuario.nombre} autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input2' type="text" name="edad" id="edad" title="edad" placeholder={props.credenciales.usuario.edad} autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input2' type="text" name="apellidos" id="apellidos" title="apellidos" placeholder={props.credenciales.usuario.apellidos} autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input2' type="email" name="email" id="email" title="email" placeholder={props.credenciales.usuario.email} autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='input2' type="text" name="nick" id="nick" title="nick" placeholder={props.credenciales.usuario.nick} autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <div className="boton" onClick={()=>actualizaUsuario()}>Actualizar Perfil</div>
                </div>
            </div>
        </div>
    )
};

export default connect((state) => ({
    credenciales: state.credenciales
}))(Perfil);