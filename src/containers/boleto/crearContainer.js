import React, { Component } from 'react'

import Crear from './../../components/boleto/crear'
import realizarPago from '../../components/boleto/realizar-pago';

class CrearContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            skipped: new Set(),
            rutaSeleccionada: '',
            fecha: '',
            CantidadDeBoletos: 0,
            tarjeta: '',
            NombreApellido:'',
            PIN:'',
        };

    }

    handleNext = () => {
        let { activeStep } = this.state;
        
        switch(activeStep) {
            case 0: {
                const { fecha, rutaSeleccionada, CantidadDeBoletos } = this.state;
                console.log(fecha, rutaSeleccionada, CantidadDeBoletos);
                if(fecha === '' || rutaSeleccionada === '' || CantidadDeBoletos <= 0) {
                    return;
                }
                break;
            }
            case 1: {
                const {NombreApellido, tarjeta, PIN} = this.state;
                console.log(NombreApellido, tarjeta, PIN);
                if(NombreApellido === '' || tarjeta === '' || PIN <= 0) {
                    return;
                }
                break;
            }
            case 2: {
                if (realizarPago !== 0){
                    return;
                }
                break;
            }
        }

        if(activeStep === 3) {
            activeStep = 0;
        }
        else {
            activeStep += 1;
        }

        let { skipped } = this.state;
        this.setState({
            activeStep: activeStep,
            skipped,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleChangeRuta = (event) => {
        this.setState({
            rutaSeleccionada: event.target.value,
        })
    }

    handleChangeFecha = (event) => {
        this.setState({
            fecha: event.target.value,
        });
    }

    handleChangeBoletos = (event) => {
        this.setState({
            CantidadDeBoletos: event.target.value,
        })
    }
    
    handleChangeNombre = (event) => {
        this.setState({
            NombreApellido: event.target.value,
        })
    }

    handleChangetarjeta = (event) => {
        this.setState({
            tarjeta: event.target.value,
        })
    }

    handleChangeNumeroSeguridad = (event) => {
        this.setState({
            PIN: event.target.value,
        })
    }

    render() {

        const steps = ['Ruta de viaje', 'Información de pago', 'Realizar pago'];

        const { activeStep, rutaSeleccionada, fecha, CantidadDeBoletos, NombreApellido, tarjeta, PIN } = this.state;

        return (
            <Crear
                steps={ steps }
                activeStep={ activeStep }
                onNext={this.handleNext}
                onBack={this.handleBack}
                rutaSeleccionada={rutaSeleccionada}
                onChangeRuta={this.handleChangeRuta}
                fecha={fecha}
                onChangeFecha={this.handleChangeFecha}
                CantidadDeBoletos={CantidadDeBoletos}
                onChangeBoletos={this.handleChangeBoletos}
                NombreApellido={NombreApellido}
                onChangeNombre={this.handleChangeNombre}
                tarjeta={tarjeta}
                onChangetarjeta={this.handleChangetarjeta}
                PIN={PIN}
                onChangeNumeroSeguridad={this.handleChangeNumeroSeguridad}
            />
        );

    }

}

export default CrearContainer;