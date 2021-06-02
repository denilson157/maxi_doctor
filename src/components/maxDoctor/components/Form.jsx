import React, { useState } from 'react'
import { FormControl, TextField, InputAdornment, Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    adornmentSize: {
        fontSize: '0.7rem',
        width: '27px',
        textAlign: 'initial'
    },
    select: {
        '&:before': {
            borderColor: theme.palette.primary.main
        },
        '&:after': {
            borderColor: theme.palette.background.default
        }
    },
    icon: {
        fill: theme.palette.primary.main
    },
    underline:{
        borderColor: theme.palette.primary.main
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

    return (
        <FormControl>
            <TextField
                id="standard-start-adornment"
                placeholder="0000000"
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            <p className={classes.adornmentSize}>
                                CRM
                            </p>
                        </InputAdornment>,
                }}
            />

            <TextField
                id="standard-select-currency-native"
                select
                // value={currency}
                // onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                input={
                    <Input classes={{
                        underline: classes.underline,
                    }} />
                }
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            <p className={classes.adornmentSize}>
                                UF
                            </p>
                        </InputAdornment>,
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
            <Button onClick={() => getUf()}>
                buscar
            </Button>
        </FormControl>
    )
};

export default Form;