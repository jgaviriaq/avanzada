import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, color } from '@material-ui/core';


const Login = ({ datosConsulta, componente }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginPage = async () => {
        const userData = {
            email: email,
            password: password
        }
        console.log(JSON.stringify(userData));

        try {
            const response = await fetch("http://localhost:4000/auth", {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const user = await response.json();
            console.log(user);
            if (user.payload.email === email ) {
                window.location.href = "/nueva-cuenta";
            } else {
                console.log("Error111");
            }

        } catch (e) {
            console.log(e)
        }
    }


    //Cuando Inicie Sesion

    const onSubmit = e => {
        e.preventDefault();

        datosConsulta(email, password);

    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark" >
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={e => setPassword(e.target.value)}

                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" onClick={loginPage}
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Registrarseee
                </Link>
                {componente}
            </div>
        </div>

    );
}

export default Login;