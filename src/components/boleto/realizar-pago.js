import React from 'react';

import Plantilla from './../tema/plantilla';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';

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

const RutaDeViaje = (props) => {

    const { classes } = props;

    return (
        <section>

            <Typography component='h4' variant='h4' align='center'>
                Click en 'Finalizar' para realizar pago
            </Typography>

        </section>
    )

}

export default withStyles(styles)(RutaDeViaje);