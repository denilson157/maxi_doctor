import React from 'react'
import { Header, Form, Footer } from './components'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    content: {
        width: '100%',
        padding: '20px'
    }
}));


const MaxDoctor = () => {

    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Header />
            <Form />
            <Footer />
        </div>
    )
}

export default MaxDoctor;