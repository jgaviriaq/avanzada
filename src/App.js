import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import RegisterProducts from './components/products/ProductsRegister';
import Error from './components/error/Error';


function App() {
  let expresion_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-.]+$/;
  const [fallo, guardarFallo] = useState(false)
  const [error, guardarError] = useState();


  const datosConsulta = (dato, dato1) => {
    if (dato === '' || dato1 === '') {
      guardarFallo(true);
      guardarError("Lo siento")
      return;
    }

    if (!expresion_correo.test(dato)) {
      guardarFallo(true);
      guardarError("Lo siento0000000")
      return;
    }

    // guardarError(false);
  }

  //Cargar componente condicionalmente

  let componente;
  if (fallo) {
    componente = error

  } else {
    componente = null
  }


  return (
    <Router>
      <Switch>
        <Route exact path="/" exact >
          <Login
            datosConsulta={datosConsulta}
            componente={componente}
          />
        </Route>
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/register-products" component={RegisterProducts} />
      </Switch>
    </Router>
  );
}

export default App;
