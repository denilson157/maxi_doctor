import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typographySubtitle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.palette.primary.main,
        marginBottom: '30px',
        marginTop: '20px',
    },
    title: {
        marginBottom: '0px',
        marginTop: '0px',
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <span>
                <p className={classes.title}>Max</p>
                <p className={classes.title}>Doctor</p>
            </span>
            <Typography className={classes.typographySubtitle} variant="subtitle1" gutterBottom>
                <p className={classes.title}>A plataforma de compra direta </p>
                <p className={classes.title}>do seu anestésico tópico</p>
            </Typography>
        </div >
    )
};

export default Header;