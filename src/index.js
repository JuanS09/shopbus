import React from 'react';
import ReactDOM from 'react-dom';
import Descripcion from './components/boleto/descripcion'
import ComponentePrubaContainer from './componentePrueba';
import rutaDeViaje from './components/boleto/ruta-de-viaje';
import Router from './components/router'
import * as serviceWorker from './serviceWorker';

import {Initialize} from './config'




Initialize();

ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); 