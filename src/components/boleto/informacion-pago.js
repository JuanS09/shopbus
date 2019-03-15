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
                        id="nombre"
                        label="Nombres y apellidos"
                        className={classes.cuadroDeTexto}
                    />
                </Grid>
            </Grid>

            <section className={classes.separador}></section>

            <Grid container>
                <Grid item xs={6} md={8}>
                    <FormControl className={classes.cuadroDeTexto}>
                        <InputLabel htmlFor="mes">Mes de vencimiento</InputLabel>
                        <Select
                            inputProps={{
                                name: 'mes',
                                id: 'mes',
                            }}
                        >
                            <MenuItem value="">
                                <em></em>
                            </MenuItem>
                            <MenuItem value={1}>Enero</MenuItem>
                            <MenuItem value={2}>Febrero</MenuItem>
                            <MenuItem value={3}>Marzo</MenuItem>
                            <MenuItem value={4}>Abril</MenuItem>
                            <MenuItem value={5}>Mayo</MenuItem>
                            <MenuItem value={6}>Junio</MenuItem>
                            <MenuItem value={7}>Julio</MenuItem>
                            <MenuItem value={8}>Agosto</MenuItem>
                            <MenuItem value={9}>Septiembre</MenuItem>
                            <MenuItem value={10}>Octubre</MenuItem>
                            <MenuItem value={11}>Noviembre</MenuItem>
                            <MenuItem value={12}>Diciembre</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                    <TextField
                        id="año"
                        label="Año de vencimiento"
                        className={classes.cuadroDeTexto}
                    />
                </Grid>
            </Grid>

            <section className={classes.separador}></section>

            <Grid container>
                <Grid item xs={12} md={8}>
                    <TextField
                        id="tarjeta"
                        label="Número de tarjeta"
                        className={classes.cuadroDeTexto}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="cvc"
                        label="Número de seguridad (CVC)"
                        className={classes.cuadroDeTexto}
                    />
                </Grid>
            </Grid>

            <section className={classes.separador}></section>

        </section>
    )

}

export default withStyles(styles)(RutaDeViaje);