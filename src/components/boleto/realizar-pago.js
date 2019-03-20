import React from 'react';

import Plantilla from './../tema/plantilla';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';

import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'green',
      },
})

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const RutaDeViaje = (props) => {

    const {
        classes,
        rutaSeleccionada,
        fecha,
        CantidadDeBoletos,
        NombreApellido,
        tarjeta,
    } = props;

    return (
        <section>

            <Typography component='h4' variant='h4' align='center'>
                Click en 'Finalizar' para realizar pago
            </Typography>
            <Divider />
            <Table className={classes.table}>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Ruta
                        </TableCell>
                        <TableCell align="right">
                            {rutaSeleccionada}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Fecha
                        </TableCell>
                        <TableCell align="right">
                            {fecha}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Cantidad
                        </TableCell>
                        <TableCell align="right">
                            {CantidadDeBoletos}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Nombre y apellidos
                        </TableCell>
                        <TableCell align="right">
                            {NombreApellido}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Tarjeta
                        </TableCell>
                        <TableCell align="right">
                            {tarjeta}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )

}

export default withStyles(styles)(RutaDeViaje);