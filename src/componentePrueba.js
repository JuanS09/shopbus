import React, { Component } from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'

class ComponentePruebaContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            arregloDeDatos: [],
        };
    }

    render() {
        const { arregloDeDatos } = this.state;
        return (
            <div>
                <h1>Prueba de leer mis dato de Firebase</h1>
                {
                    arregloDeDatos.map((item) => {
                        return (
                            <h3 key={item.id}>
                                {item.nombres} {item.apellidos}
                            </h3>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount() {
        let db = firebase.firestore();
        db.collection('personas').onSnapshot((snapshot) => {
            
            let { arregloDeDatos } = this.state;

            snapshot.docChanges().forEach(chance => {
                switch(chance.type) {
                    case 'added': {
                        arregloDeDatos.push({
                            id: chance.doc.id,
                            nombres: chance.doc.data().nombres,
                            apellidos: chance.doc.data().apellidos,
                        });
                        break;
                    }
                    case 'modified': {
                        break;
                    }
                    case 'removed': {
                        break;
                    }
                }
            });

            this.setState({
                arregloDeDatos: arregloDeDatos,
            });

        })
    }

}

export default ComponentePruebaContainer;