import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const Home = () =>
(
    <div>
        Avaliação de Denílson
        <Link to="/maxdoctor">
            <button>
                Acessar MaxDoctor
                </button>
        </Link>
    </div>
);

export default Home;