import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MI from '../../me-gusta-viajar.png';
import Plantilla from './../tema/plantilla';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },

    titulo: {
        fontFamily: 'Roboto',
        fontSize: 24,
        color: 'rgba(61, 6, 121)'
    },

    texto: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'rgba(0,0,0,0.8)'
    }

  });

class Descripcion extends Component{

    render() {

        const { classes } = this.props;
        return (
            <Plantilla>
                <Grid container justify='center'>
                    <Grid item xs={8}>
                        <Paper className={classes.root} elevation={1}>

                            <div>
                            
                                <h1 className={classes.titulo}>
                                    Bienvenido a ShopBus
                                </h1>
                                    
                                <h4 className={classes.texto}>
                                    ShopBus es una empresa que se encarga sobre la venta de boletos en línea 
                                    para buses expresos, con ruta Juigalpa - Managua, con el fin de garantizarle
                                    un menor tiempo en la compra, dando una mayor experiencia al adquirir un boleto
                                    en línea.
                                </h4>

                                <img src={MI}></img>

                                <h1 className={classes.titulo}>
                                    Visión
                                </h1>

                                <h4 className={classes.texto}>
                                    Ser la compañía en los municipios de Juigalpa y Managua,
                                    número uno en ventas de boletos en línea para buses expreso, 
                                    logrando que nuestros estándares sean lo más altos posibles, 
                                    de manera de encontrar un beneficio que le sea atractivo para nuestros clientes, 
                                    proveedores, afiliados y se sientan totalmente a gusto con nuestros servicios y
                                    ser reconocidos.
                                </h4>

                                <h1 className={classes.titulo}>
                                    Misión
                                </h1>

                                <h4 className={classes.texto}>
                                    Ser la compañía en los municipios de Juigalpa y Managua, 
                                    que brinde los mejores servicios y tenga un punto centralizado de ventas 
                                    y compra de boletos en línea para buses expresos, comprometiéndonos en brindar
                                    a los usuarios un servicio de transporte, con un nivel de alta calidad, 
                                    puntualidad, seguridad, y comodidad; satisfaciéndole totalmente sus expectativas.
                                </h4>          
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Plantilla>
        )
    }

};
  


export default withStyles(styles)(Descripcion);