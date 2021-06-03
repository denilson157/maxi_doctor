import React, { useState, useEffect } from 'react'
import { FormControl, TextField, Typography, InputAdornment, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    adornmentSize: {
        fontSize: '0.7rem',
        width: '27px',
        textAlign: 'initial'
    },
    typographySubtitle: {
        fontWeight: '549',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        color: theme.palette.primary.main
    },
    title: {
        marginBottom: '0px',
        marginTop: '0px',
    },
    buttonSubmit: {
        marginTop: '10px',
        marginBottom: '15px',
        minWidth: '100%'
    },
    select: {
        paddingTop: '10px',
        color: theme.palette.black.light
    },
    messsageSuccess: {
        fontWeight: '549',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        color: theme.palette.primary.main,
        marginBottom: '0px',
        paddingTop: '10px',
    }
}));

const Form = () => {

    const classes = useStyles();
    const [ufs, setUfs] = useState([]);

    const [form, setForm] = useState(
        {
            crm: '',
            uf: '0'
        }
    );

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formErrors, setFormErrors] = useState(false);

    const handleChange = e => {
        form[e.target.name] = e.target.value;
        setForm(form);
    }

    const handleSubmit = () => {
        if (validate())
            setFormSubmitted(true)
        else
            setFormSubmitted(false)
    }

    const validate = () => {
        let errors = {};

        if (form.crm === '')
            errors.crm = "Este campo é obrigatório";

        if (form.crm !== '' && form.crm.length < 5)
            errors.crm = "Necessário ter no mínimo 5 caracteres.";

        if (form.uf === '0')
            errors.uf = "Este campo é obrigatório";


        setFormErrors(errors)

        return Object.values(errors).every(x => x === "")
    }

    // Pegar Dados UF
    useEffect(() => {
        getUf();
    }, []);

    const getUf = () => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(ufsData => setUfs(ufsData));
    }

    const adornment = text => (
        <InputAdornment position="start">
            <p className={classes.adornmentSize}>
                {text}
            </p>
        </InputAdornment>
    )


    return (
        <FormControl fullWidth={true}>
            <TextField

                id="standard-start-adornment"
                name="crm"
                onChange={e => handleChange(e)}
                defaultValue={form.crm}
                placeholder="0000000"
                InputProps={{
                    startAdornment: adornment("CRM")
                }}
                {...(formErrors.crm && { error: true, helperText: formErrors.crm })}
            />

            <TextField
                name="uf"
                className={classes.select}
                onChange={e => handleChange(e)}
                select
                id="standard-select-currency-native"
                SelectProps={{
                    native: true,
                }}
                InputProps={{
                    startAdornment: adornment("UF")
                }}
                defaultValue={form.uf}
                {...(formErrors.uf && { error: true, helperText: formErrors.uf })}
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

            {
                formSubmitted &&
                <Typography className={classes.messsageSuccess} variant="subtitle1" gutterBottom>
                    <p className={classes.title}>sucesso</p>
                </Typography>
            }

            <Button onClick={() => handleSubmit()} variant="contained" color="secondary" className={classes.buttonSubmit}>
                Continue
            </Button>



            <Typography className={classes.typographySubtitle} variant="subtitle1" gutterBottom>
                <p className={classes.title}>Canal de compra exclusico </p>
                <p className={classes.title}>para classe médica</p>
            </Typography>

        </FormControl>
    )
};

export default Form;