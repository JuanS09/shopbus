import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Link } from 'react-router-dom';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

const MenuDrawer = (props) => {

    const { classes, open, onClose } = props;

    const sideList = (
        <div className={classes.list}>
            <List>
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Inicio'} />
                    </ListItem>
                </Link>
                <Link to ={'/boleto/descripcion'}>
                <ListItem button>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary={'Quienes somos?'} />
                </ListItem>
                </Link>
                <Link to="/boleto/crear">
                    <ListItem button>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={'Reserva en línea'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
            <Link to="/boleto/contacto">
                <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary={'Contáctenos'} />
                </ListItem>
            </Link>
            </List>
        </div>
    );

    return (
        <Drawer open={open} onClose={onClose}>
            <div
                tabIndex={0}
                role="button"
                onClick={onClose}
                onKeyDown={onClose}
            >
                {sideList}
            </div>
        </Drawer>
    );

}

MenuDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDrawer);