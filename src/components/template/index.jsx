import React from 'react'
import Routes from '../../routes/index'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    }
}));

const Base = () =>
(
    <Grid className={useStyles.root}>
        <Routes />
    </Grid>
);

export default Base;