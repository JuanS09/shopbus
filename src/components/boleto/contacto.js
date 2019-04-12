import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Plantilla from './../tema/plantilla';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TelefonoIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core';


const styles = theme => ({

    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },

    titulo: {
        fontFamily: 'Roboto',
        fontSize: 24,
        color: 'rgba(0,0,0,0.8)'
    },

    texto: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'rgba(0,0,0,0.8)'
    },

    cuadroDeTexto: {
        width: '100%',
    },

    contenedorBotones: {
        display: 'flex',
        justifyContent: 'center',       
    },

    separador: {
        height: '15px',
    },
})

class Contactenos extends Component {

    render (){

        const { classes } = this.props;
            return (
                <Plantilla>
                    <Grid container justify='center'>
                        <Grid item xs={5}>
                            <Paper className={classes.root} elevation={1}>
                                <div>
                                    <h1 className={classes.titulo}> 
                                        Ponte en contacto 
                                    </h1>
                                        
                                    <h4 className={classes.texto}>
                                        Puedes escribir o llamar directamete a nuestra agencia.
                                    </h4>                

                                    <h4 className={classes.texto}>
                                        ShopBus 
                                        Oficina principal Nicaragua 
                                    </h4>

                                    <h4 className={classes.texto}>
                                        <TelefonoIcon />
                                        +50586070788 / +50558770083 / +50587943444
                                    </h4>

                                    <h4 className={classes.texto}>
                                        <EmailIcon />
                                        <a 
                                        href="mailto:shopbus49@gmail.com"> shopbus49@gmail.com
                                        </a>
                                    </h4>
                                </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={classes.root} elevation={1}>
                            <TextField
                                id="nombre"
                                label="Nombre"
                                className={classes.cuadroDeTexto}
                            /> 
                            <section className={classes.separador}></section>

                            <TextField
                                id="email"
                                label="Email"
                                className={classes.cuadroDeTexto}
                            />
                            <section className={classes.separador}></section>

                            <TextField
                                id="mensaje"
                                label="Mensaje"
                                className={classes.cuadroDeTexto}
                            />
                            <section className={classes.separador}></section>

                            <section className={classes.contenedorBotones}>
                                <Button variant="outlined" color="Seconday" className={classes.button}>
                                    Enviar
                                </Button>
                            </section>
                        </Paper>
                    </Grid>
                </Grid>
            </Plantilla>
        )
    }
};
  
export default withStyles (styles)(Contactenos);