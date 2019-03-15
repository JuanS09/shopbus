import React from 'react';
import ReactDOM from 'react-dom';
import Crear from './containers/boleto/crearContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Crear />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();