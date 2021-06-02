import React from 'react'
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import WeekendIcon from '@material-ui/icons/Weekend';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    iconBox: {
        maxWidth: '85px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerGrid: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '1.5rem',
        marginTop: '2.5rem'
    },
    iconFontSize: {
        fontSize: '3.2rem'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.containerGrid}>

                <div className={classes.iconBox}>
                    <ShoppingCartIcon className={classes.iconFontSize} color="secondary" />
                    <span>Facilidade de Compra</span>
                </div>
                <div className={classes.iconBox}>
                    <ViewComfyIcon className={classes.iconFontSize} color="secondary" />
                    <span>Quantidade Não Limitada</span>
                </div>
            </Grid>

            <Grid className={classes.containerGrid}>

                <div className={classes.iconBox}>
                    <LocalShippingIcon className={classes.iconFontSize} color="secondary" />
                    <span>Frete Grátis</span>
                </div>
                <div className={classes.iconBox}>
                    <MotorcycleIcon className={classes.iconFontSize} color="secondary" />
                    <span>Agilidade</span>
                </div>
                <div className={classes.iconBox}>
                    <WeekendIcon className={classes.iconFontSize} color="secondary" />
                    <span>Comodidade</span>
                </div>
            </Grid>


        </div>
    )
};

export default Footer;