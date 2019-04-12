import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

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
        width: '300px',
        minHeight: '230px',
        padding: '28px',
        
    },
    cuadroDeTexto: {
        width: '100%',
    
        
    },
    separador: {
        height: '24px',
    },
    contenedorBotones: {
        display: 'flex',
        justifyContent: 'center',       
    },
});

const Registrarse = (props) => {

    const { classes } = props;

    return (
        <section className={classes.pagina}>
            <Paper
                className={classes.formulario}
            >
                <TextField
                    id="name"
                    label="Nombre"
                    className={classes.cuadroDeTexto}
                />
                <section className={classes.separador}></section>
                <TextField
                    id="surname"
                    label="Apellido"
                    className={classes.cuadroDeTexto}
                />
                <section className={classes.separador}></section>
                <TextField
                    id="email"
                    label="Correo electronico"
                    className={classes.cuadroDeTexto}
                />
                <section className={classes.separador}></section>
                <TextField
                    id="pass"
                    label="Contraseña"
                    type={'password'}
                    className={classes.cuadroDeTexto}
                />
                <section className={classes.separador}></section>
                 <TextField
                    id="pass"
                    label="Confirmar Contraseña"
                    type={'password'}
                    className={classes.cuadroDeTexto}
                />
                <section className={classes.separador}></section>
                <section className={classes.contenedorBotones}>
                    <Link to={'/'}>
                        <Button variant="outlined" color="Seconday" className={classes.button}>
                            Registrarse
                        </Button>
                    </Link>
                </section>
            </Paper>
        </section>
    );

}

export default withStyles(styles)(Registrarse);