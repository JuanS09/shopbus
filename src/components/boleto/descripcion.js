import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MI from '../../me-gusta-viajar.png'




class Descripcion extends Component{
    render (){
        return (
            <div>
                <h1>
                    <b>Bienvenido a ShopBus</b>
                </h1>
                
                <h4>
                    ShopBus es una empresa que se encarga sobre la venta de boletos en línea 
                    para buses expresos, con ruta Juigalpa - Managua, con el fin de garantizarle
                    un menor tiempo en la compra, dando una mayor experiencia al adquirir un boleto
                    en línea.
                </h4>

                <img src={MI}></img>

                <h1>Visión</h1>

                <h4>
                    Ser la compañía en los municipios de Juigalpa y Managua,
                     número uno en ventas de boletos en línea para buses expreso, 
                     logrando que nuestros estándares sean lo más altos posibles, 
                     de manera de encontrar un beneficio que le sea atractivo para nuestros clientes, 
                     proveedores, afiliados y se sientan totalmente a gusto con nuestros servicios y
                     ser reconocidos.
                </h4>

                <h1>Misión</h1>

                <h4>
                    Ser la compañía en los municipios de Juigalpa y Managua, 
                    que brinde los mejores servicios y tenga un punto centralizado de ventas 
                    y compra de boletos en línea para buses expresos, comprometiéndonos en brindar
                     a los usuarios un servicio de transporte, con un nivel de alta calidad, 
                    puntualidad, seguridad, y comodidad; satisfaciéndole totalmente sus expectativas.
                </h4>          
            </div>

        )
    }
};
  


export default Descripcion;
  