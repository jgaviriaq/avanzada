import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, color } from '@material-ui/core';

const NuevaCuenta = () => {

    //State Iniciar Sesion


    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pais, setPais] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [rol, setRol] = useState("");
    const [nombreTienda, setNombreTienda] = useState("");
    const [password, setPassword] = useState("");


    //Cuando Inicie Sesion

    // const onSubmit = e => {
    //     e.preventDefault();
    //     if (nombre === '') {
    //         return (console.log("hola"))
    //     }
    //     guardarUsuario(e.nombre)
    //     guardarUsuario(e.email)
    //     guardarUsuario(e.password)
    //     guardarUsuario(e.confirmar)
    // }

    const users = async () => {
        const userData = {
            name: nombre,
            email: email,
            country: pais,
            city: ciudad,
            password: password,
            rol: rol,
            nameStore: nombreTienda
        }
        console.log(JSON.stringify(userData));

        try {
            const response = await fetch("http://localhost:4000/usuarios", {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const user = await response.json();
            console.log(user);
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark" >
                <h1>Obtener una cuenta</h1>

                <form
                // onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                            onChange={e => setNombre(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Correo Electrónico"
                            onChange={e => setEmail(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="pais">Pais</label>
                        <input
                            type="text"
                            id="pais"
                            name="pais"
                            placeholder="Pais"
                            onChange={e => setPais(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            placeholder="Ciudad"
                            onChange={e => setCiudad(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="Rol">Rol</label>
                        <input
                            type="text"
                            id="rol"
                            name="rol"
                            placeholder="Vendedor/Usuario"
                            onChange={e => setRol(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="nombreTienda">Nombre Tienda</label>
                        <input
                            type="text"
                            id="nombreTienda"
                            name="nombreTienda"
                            placeholder="nombre Tienda"
                            onChange={e => setNombreTienda(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" onClick={users}
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>

    );
}

export default NuevaCuenta;