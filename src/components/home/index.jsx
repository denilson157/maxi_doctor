import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    }
}));

const Home = () =>
(
    <Grid className={useStyles.root}>
        <div>
            Avaliação de Denílson
        <Link to="/maxdoctor">
                <button>
                    Acessar MaxDoctor
            </button>
            </Link>
        </div>
    </Grid>
);

export default Home;