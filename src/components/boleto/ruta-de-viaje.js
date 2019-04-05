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

    const { classes, onChangeRuta, rutaSeleccionada, fecha, onChangeFecha,
        onChangeBoletos, CantidadDeBoletos } = props;

    return (
        <section>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        id="fecha"
                        label="Fecha de viaje"
                        className={classes.cuadroDeTexto}
                        type={'date'}
                        onChange={onChangeFecha}
                        value={fecha}
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
                        <InputLabel htmlFor="ruta">Ruta</InputLabel>
                        <Select
                            inputProps={{
                                name: 'ruta',
                                id: 'ruta',
                            }}
                            value={rutaSeleccionada}
                            onChange={onChangeRuta}
                        >
                            <MenuItem value="">
                                <em></em>
                            </MenuItem>
                            <MenuItem value={'10'}>Juigalpa 05:45AM - Managua 07:40AM <b> C$ 100 </b></MenuItem>
                            <MenuItem value={'20'}>Juigalpa 07:00AM - Managua 08:30AM <b> C$ 100 </b></MenuItem>
                            <MenuItem value={'30'}>Juigalpa 08:15AM - Managua 09:45AM <b> C$ 100</b></MenuItem>
                            <MenuItem value={'40'}>Juigalpa 09:00AM - Managua 10:30AM <b> C$ 100</b></MenuItem>
                            <MenuItem value={'50'}>Juigalpa 01:15PM - Managua 03:00PM <b> C$ 100</b></MenuItem>
                            <MenuItem value={'60'}>Managua 09:00AM - Juigalpa 10:30AM <b> C$ 100</b></MenuItem>
                            <MenuItem value={'70'}>Managua 10:15AM - Juigalpa 11:45AM <b> C$ 100</b></MenuItem>
                            <MenuItem value={'80'}>Managua 11:30AM - Juigalpa 01:00AM <b> C$ 100</b></MenuItem>
                            <MenuItem value={'90'}>Managua 12:45PM - Juigalpa 02:15PM <b> C$ 100</b></MenuItem>
                            <MenuItem value={'100'}>Managua 02:00PM - Juigalpa 02:30PM <b> C$ 100</b></MenuItem>
                            <MenuItem value={'110'}>Managua 03:15AM - Juigalpa 04:45pM <b> C$ 100</b></MenuItem>
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
                        onChange={onChangeBoletos}                       
                        defaultValue={CantidadDeBoletos}
                       
                    />
                </Grid>
            </Grid>

            <section className={classes.separador}></section>

        </section>
    )

}

export default withStyles(styles)(RutaDeViaje);