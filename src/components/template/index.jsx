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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
}));

const Base = props => {

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
