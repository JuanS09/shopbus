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

    const {
        classes,
        onChangeRuta,
        rutaSeleccionada,
        fecha,
        onChangeFecha,
        onChangeBoletos,
        CantidadDeBoletos,
        transporte,
    } = props;

    let datos = [];

    switch(transporte) {
        case 'transporte-amador': {
            datos = [
                {
                    key: '10',
                    ruta: 'Juigalpa 05:45AM - Managua 07:40AM',
                    precio: '100',
                },
            ];
            break;
        }
        case 'transporte-gonzalez': {
            datos = [
                {
                    key: '10',
                    ruta: 'Juigalpa 01:15AM - Managua 03:15AM',
                    precio: '100',
                },

                {
                    key: '20',
                    ruta: 'Juigalpa 08:15AM - Managua 10:45AM',
                    precio: '100',
                },
            ];
            break;
        }
        case 'transporte-duartez': {
            datos = [
                {
                    key: '11',
                    ruta: 'Juiglapa 07:00AM - Managua 9:00AM',
                    precio: '100',
                },

                {
                    key: '12',
                    ruta: 'Juigalpa 08:15AM - Managua 10:45AM',
                    precio: '100',
                },

                {
                    key: '13',
                    ruta: 'Juigalpa 09:30AM - Managua 11:30AM',
                    precio: '100',
                },

                {
                    key: '14',
                    ruta: 'Juigalpa 10:45AM - Managua 12:45AM',
                    precio: '100',
                },

            ];
            break;
        }
    }

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
                            {
                                datos.map((item) => {
                                    return (
                                        <MenuItem value={item.key}>{item.ruta} <b> C$ {item.precio} </b></MenuItem>
                                    )
                                })
                            }
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