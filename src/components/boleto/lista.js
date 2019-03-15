import React from 'react';
import Plantilla from './../tema/plantilla'
import Tabla from './../tema/table'

const Lista = (props) => {

    const columns = [
        { id: 'nboleto',   align: 'left', disablePadding: false,  label: 'N° Boleto' },
        { id: 'nombre',       align: 'left', disablePadding: true,   label: 'Nombres y apellidos' },
        { id: 'precio', align: 'left', disablePadding: false,  label: 'Precio' },
        { id: 'nasiento', align: 'left', disablePadding: false,  label: 'N° Asiento' },
    ]

    const data = [
        {
            nboleto: '0001',
            nombre: 'Juan Sierra',
            precio: 100,
            nasiento: 15,
        },
        {
            nboleto: '0001',
            nombre: 'Juan Sierra',
            precio: 100,
            nasiento: 15,
        },
        {
            nboleto: '0001',
            nombre: 'Juan Sierra',
            precio: 100,
            nasiento: 15,
        },
        {
            nboleto: '0001',
            nombre: 'Juan Sierra',
            precio: 100,
            nasiento: 15,
        },
        {
            nboleto: '0001',
            nombre: 'Juan Sierra',
            precio: 100,
            nasiento: 15,
        },
    ]

    return (
        <Plantilla>
            <Tabla
                title='Listado de Boletos'
                columns={columns}
                data={data}
            ></Tabla>
        </Plantilla>
    );

}

export default Lista;