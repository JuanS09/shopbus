import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import IniciarSesion from './inicioDeSesion/entrar';
import Registrarse from './boleto/Registro/Regristrarse';
import CrearBoleto from './../containers/boleto/crearContainer';
import Descripcion from './boleto/descripcion';
import Contactenos from './boleto/contacto';

const RouterApp = () => {
    return (
        <Router>
            <Fragment>
                <Route path="/" exact component={IniciarSesion} />
                <Route path="/registrarse" exact component={Registrarse} />
                <Route path="/boleto/crear" exact component={CrearBoleto} />
                <Route path="/boleto/descripcion" exact component={Descripcion} />
                <Route path="/boleto/contacto" exact component={Contactenos} />
            </Fragment>
        </Router>
    )
}

export default RouterApp