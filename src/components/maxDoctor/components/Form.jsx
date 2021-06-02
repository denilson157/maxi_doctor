import React, { useState, useEffect } from 'react'
import { FormControl, Grid, TextField, Typography, InputAdornment, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    adornmentSize: {
        fontSize: '0.7rem',
        width: '27px',
        textAlign: 'initial'
    },
    typographySubtitle: {
        fontWeight: '549',
        fontSize:'0.9rem',
        textTransform: 'uppercase',
        color: theme.palette.primary.main
    },
    title: {
        marginBottom: '0px',
        marginTop: '0px',
    },
    buttonSubmit: {
        marginTop: '22px',
        marginBottom: '15px',
        minWidth: '100%'
    }
}));

const Form = () => {
    const classes = useStyles();
    const [ufs, setUfs] = useState([]);

    const getUf = () => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(ufsData => setUfs(ufsData));
    }

    useEffect(() => {
        getUf();
    }, []);

    const adornment = text => (
        <InputAdornment position="start">
            <p className={classes.adornmentSize}>
                {text}
            </p>
        </InputAdornment>
    )

    return (
        <FormControl fullWidth="true">
            <TextField
                id="standard-start-adornment"
                placeholder="0000000"
                InputProps={{
                    startAdornment: adornment("CRM")
                }}
            />

            <TextField
                className={classes.select}
                id="standard-select-currency-native"
                select
                // value={currency}
                // onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                InputProps={{
                    startAdornment: adornment("UF")
                }}
            >
                <option value="0">
                    Selecionar
                </option>
                {ufs.sort((a, b) => a.sigla < b.sigla ? -1 : a.sigla > b.sigla ? 1 : 0).map((option) => (
                    <option key={option.sigla} value={option.sigla}>
                        {option.sigla}
                    </option>
                ))}
            </TextField>

            <Button variant="contained" color="secondary" className={classes.buttonSubmit}>
                Continue
            </Button>

            <Typography className={classes.typographySubtitle} variant="subtitle1" gutterBottom>
                <p className={classes.title}>Canal de compra exclusico </p>
                <p className={classes.title}>para classe media</p>
            </Typography>

        </FormControl>
    )
};

export default Form;