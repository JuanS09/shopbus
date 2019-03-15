import React from 'react';
import MenuSuperior from './menuSuperior';

const Plantilla = (props) => {

    const { children } = props;

    return (
        <section>
            <MenuSuperior />
            {children}
        </section>
    );

}

export default Plantilla;