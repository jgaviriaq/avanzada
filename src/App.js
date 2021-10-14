import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Error from './components/error/Error';


function App() {

  const [error, guardarError] = useState(false);

  const datosConsulta = (dato, dato1) => {
    if (dato === '' || dato1 === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
  }

  //Cargar componente condicionalmente

  let componente;
  if (error) {
    componente = <Error mensaje='Ambos campos son obligatorios'></Error>
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
      </Switch>
    </Router>
  );
}

export default App;
