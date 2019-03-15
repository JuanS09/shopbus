import React from 'react';
import Plantilla from './../tema/plantilla';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import RutaDeViaje from './ruta-de-viaje';
import InformacionPago from './informacion-pago';
import RealizarPago from './realizar-pago';

const styles = ({
    pagina: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: '100vh',
        width: '100vw',

        //centrar con flexbox
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formulario: {
        marginTop: '24px',
        padding: '28px',
    },
    cuadroDeTexto: {
        width: '100%',
    },
    separador: {
        height: '24px',
    },
    boton: {
        width: '100%',
    },
    titulo: {
        color: blueGrey[900],
    },
    linea: {
        borderColor: blueGrey[900],
    },
})

const Crear = (props) => {

    const {
        classes,
        steps,
        activeStep,
        onBack,
        onNext,
    } = props;

    let stepContenido;

    switch(steps[activeStep]) {
        case 'Ruta de viaje':
            stepContenido = (<RutaDeViaje />)
            break;
        case 'Información de pago':
            stepContenido = (<InformacionPago />)
            break;
        case 'Realizar pago':
            stepContenido = (<RealizarPago />)
            break;
        default:
            stepContenido = (<h1>{activeStep}</h1>)
            break;
    }

    let contenido = (
        <div>
            {stepContenido}
            <Button
                disabled={activeStep === 0}
                onClick={onBack}
                className={classes.button}
            >
                Atrás
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={onNext}
                className={classes.button}
            >
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
            </Button>
        </div>
    )
    
    return (
        <Plantilla>
            <Grid container justify={'center'}>
                <Grid xs={10} sm={8} md={6}>
                    <Paper className={classes.formulario}>
                        <Typography className={classes.titulo} component="h4" variant="h4" align={'center'}>
                            Disponibilidad de viajes
                        </Typography>

                        <hr className={classes.linea} />

                        <section className={classes.separador}></section>

                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const props = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...props}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>

                        <section className={classes.separador}></section>

                        {
                            (activeStep === steps.lenght) ? (
                                <div>
                                    <Typography className={classes.instructions}>
                                        Finalizado
                                    </Typography>
                                    <Button onClick={this.handleReset} className={classes.button}>
                                        Pagar otro
                                    </Button>
                                </div>
                            )
                            :
                            (contenido)
                        }

                    </Paper>
                </Grid>
            </Grid>
        </Plantilla>
    );

}

export default withStyles(styles)(Crear);