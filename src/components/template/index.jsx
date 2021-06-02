import React from 'react'
import Routes from '../../routes/index'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
    }
}));

const Base = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="sm" className={classes.root}>
            <main className={classes.main}>
                <Routes />
            </main>
        </Container >
    );
}


export default withStyles(useStyles)(Base);
