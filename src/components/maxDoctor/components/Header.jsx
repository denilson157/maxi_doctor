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
    },
    max: {
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    doctor: {
        textAlign: 'center',
        paddingLeft: '30px',
        paddingBottom: '8px',
        marginTop: '0px',
        lineHeight: '0.7rem'
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <span>
                <div>
                    <Typography className={classes.max} variant="h3" color="primary">
                        MAX
                    </Typography>
                </div>
                <Typography variant="h5">
                    <p className={classes.doctor}>Doctor</p>
                </Typography>
            </span>
            <Typography className={classes.typographySubtitle} variant="subtitle1" gutterBottom>
                <p className={classes.title}>A plataforma de compra direta </p>
                <p className={classes.title}>do seu anestésico tópico</p>
            </Typography>
        </div >
    )
};

export default Header;