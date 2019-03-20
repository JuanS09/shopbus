import React, { Component } from 'react'

import Crear from './../../components/boleto/crear'

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
        const { activeStep } = this.state;
        let { skipped } = this.state;
        this.setState({
            activeStep: activeStep + 1,
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