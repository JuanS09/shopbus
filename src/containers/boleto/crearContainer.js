import React, { Component } from 'react'

import Crear from './../../components/boleto/crear'

class CrearContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            skipped: new Set(),
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

    render() {
        const steps = ['Ruta de viaje', 'Información de pago', 'Realizar pago'];
        const { activeStep } = this.state;
        return (
            <Crear
                steps={ steps }
                activeStep={ activeStep }
                onNext={this.handleNext}
                onBack={this.handleBack}
            />
        );
    }

}

export default CrearContainer;