import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none'
    }
}));

const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                Avaliação de Denílson
            </Typography>
            <Link to="/maxdoctor" className={classes.link}>
                <Button variant="contained" color="primary">
                    Acessar MaxDoctor
                </Button>
            </Link>
        </>
    )
}

export default Home;