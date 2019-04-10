import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import './globales.css';

import IniciarSesion from './inicioDeSesion/entrar';
import Registrarse from './boleto/Registro/Regristrarse';
import CrearBoleto from './../containers/boleto/crearContainer';
import Descripcion from './boleto/descripcion';
import Contactenos from './boleto/contacto';
import Inicio from './PantallaInicio/inicio';

const RouterApp = () => {
    return (
        <Router>
            <Fragment>
                <Route path="/IniciarSecion" exact component={IniciarSesion} />
                <Route path="/registrarse" exact component={Registrarse} />
                <Route path="/boleto/crear/:transporte" exact component={CrearBoleto} />
                <Route path="/boleto/descripcion" exact component={Descripcion} />
                <Route path="/boleto/contacto" exact component={Contactenos} />
                <Route path="/" exact component={Inicio} />
            </Fragment>
        </Router>
    )
}

export default RouterApp