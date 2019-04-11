import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Plantilla from './../tema/plantilla';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },

    titulo: {
        fontFamily: 'Roboto',
        fontSize: 35,
        color: 'rgba(61, 6, 121)'
    },

    texto: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'rgba(0,0,0,0.8)'
    },

    card: {
        maxWidth: 345,
      },
      media: {
        objectFit: 'cover',
      },
      pagina: {
          margin:'left'
      },

      separador: {
        height: '24px',
    },

  });

function ImgMediaCard(props) {
  const { classes } = props;
  return (
      <Plantilla>
           <div style={
                    {
                        display: 'flex',
                        justifyContent: 'right',
                    }
                }>
                    <img
                        src={process.env.PUBLIC_URL + '/assets/shopbus.png'}
                        style={
                            {
                                width: '160px',
                                height: '150px',
                            }
                        }
                    />
                </div>
          <Grid container justify='center'>
                <Grid item xs={8}>

                    <div>
                        <h1 className={classes.titulo}>
                            BIENVENIDO A SHOPBUS
                        </h1>

                        <h4 className={classes.texto}>
                            ShopBus es una empresa que se encarga sobre la venta de boletos en línea 
                            para buses expresos, con ruta Juigalpa - Managua, dando una oportunidad diferente
                            al usuario de más de 140.4 kilómetros de distancia.
                        </h4>
                    </div>
                </Grid>
            </Grid>
            
            <section className={classes.separador}></section>
            
        <Grid container justify='center'>
                <Grid item xs={12} lg={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.media}
                                height="140"
                                image={process.env.PUBLIC_URL + '/assets/1.png'}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Transporte Amador
                                </Typography>
                                <Typography component="p">
                                    Viaja en un ambiente comodo y agradable con esta linea de buses
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/boleto/crear/transporte-amador">
                                <Button size="small" color="primary">
                                    Entrar
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} lg={3}>
                    <Card className={classes.card}>
                    <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.media}
                                height="140"
                                image={process.env.PUBLIC_URL + '/assets/2.jpg'}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Transporte González
                                    </Typography>
                                    <Typography component="p">
                                        Viaja seguro y en buenas manos con esta linea de buses
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/boleto/crear/transporte-gonzalez">
                                <Button size="small" color="primary">
                                    Entrar
                                </Button>
                            </Link>
                        </CardActions>
                    </Card> 
                </Grid>

                <Grid item xs={12} lg={3}>
                <Card className={classes.card}>
                    <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.media}
                                height="140"
                                image={process.env.PUBLIC_URL + '/assets/3.jpg'}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Transporte Duartez
                                    </Typography>
                                    <Typography component="p">
                                        viaja mas facil y rapido con esta linea de buses 
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/boleto/crear/transporte-duartez">
                                <Button size="small" color="primary">
                                    Entrar
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
        </Grid>
      </Plantilla>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);

