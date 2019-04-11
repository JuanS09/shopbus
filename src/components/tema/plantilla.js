import React, { Component } from 'react';
import MenuSuperior from './menuSuperior';
import Drawer from './drawer';


class Plantilla extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            open: false,
        };
    }

    toggleDrawer = (open) => () => {
        console.log("Open: ", open)
        this.setState({
            open: open,
        });
    };

    render () {

        const { children } = this.props;

        const { open } = this.state;

        return (
            <section>
                <MenuSuperior
                    onClickDrawerMenu={this.toggleDrawer(true)}
                />
                <Drawer
                    open={open}
                    onClose={this.toggleDrawer(false)}
                />
                <section
                    style={{
                        background: '#e8eaf6',
                        paddingTop: 24,
                        paddingBottom: 24,
                    }}
                >
                    {children}
                </section>
            </section>
        );

    }

}

export default Plantilla;