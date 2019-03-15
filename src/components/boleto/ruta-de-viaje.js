import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        id="fecha"
                        label="Fecha de viaje"
                        className={classes.cuadroDeTexto}
                        type={'date'}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>

            <section className={classes.separador}></section>

            <Grid container>
                <Grid item xs={12}>
                    <FormControl className={classes.cuadroDeTexto}>
                        <InputLabel htmlFor="ruta">Age</InputLabel>
                        <Select
                            inputProps={{
                                name: 'ruta',
                                id: 'ruta',
                            }}
                        >
                            <MenuItem value="">
                                <em></em>
                            </MenuItem>
                            <MenuItem value={10}>Juigalpa 08:00AM - Managua 10:00AM <b>C$ 100</b></MenuItem>
                            <MenuItem value={20}>Juigalpa 02:00AM - Masaya 04:00AM <b>C$ 90</b></MenuItem>
                            <MenuItem value={30}>Managua 04:00AM - Santo Tomás 07:00AM <b>C$ 120</b></MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <section className={classes.separador}></section>

            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        id="cantidad"
                        label="Cantidad de boletos"
                        className={classes.cuadroDeTexto}
                    />
                </Grid>
            </Grid>

            <section className={classes.separador}></section>

        </section>
    )

}

export default withStyles(styles)(RutaDeViaje);