import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    row: {
        display: 'flex',
        padding: 10,
        margin: 10
    },
    item: {
        margin: 5,
        padding: 5,
        justifyContent: "right",
    },
})


function AddItem(props) {
    const classes = useStyles()
    const [numberSet, setNumberSet] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [error, setError] = useState(false)
    const [category, setCategory] = useState('money')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (numberSet == '') {
            setError(true)
        }
        //   if (title && details) {
        //     fetch('http://localhost:8000/notes', {
        //       method: 'POST',
        //       headers: {"Content-type": "application/json"},
        //       body: JSON.stringify({ title, details, category })
        //     }).then(() => redirect'/'))
        //   } 
    }

    return (
        <Container size="sm">


            <form noValidate autoComplete="off" onSubmit={console.log('enviado')} >
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="left"
                    justifyContent="left"
                  
                >
                        <Grid item md={12} lg={12} xs={12}>

                                <Typography
                variant="h4"
                color="textSecondary"
                component="h2"
                
            >
                Cadastrar Lego
            </Typography>
            </Grid>
                    <Grid item md={8} lg={8} xs={8}>

                        <TextField
                            onChange={(e) => setTitle(e.target.value)}
                            label="Nome Set"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required

                        />

                    </Grid>
                    <Grid item md={4} lg={4}>

                        <TextField
                            onChange={(e) => setTitle(e.target.value)}
                            label="Número Set"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required

                        />

                    </Grid>
                    <Grid item md={12} lg={12}>
                        <TextField
                            onChange={(e) => setDescription(e.target.value)}
                            label="Descrição"
                            variant="outlined"
                            color="secondary"
                            multiline
                            rows={3}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item md={12} lg={12}>
                        <TextField
                            onChange={(e) => setDetails(e.target.value)}
                            label="Valor"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                        />
                    </Grid>
                    {/* <Grid item md={5} lg={5}>
                        <TextField
                            onChange={(e) => setDetails(e.target.value)}
                            label="Quantidade Peças"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                        />
                    </Grid> */}
                    <Grid item md={2} lg={2} >
                 <Typography variant="h6" color="#000">Foto do Set</Typography></Grid>
                <Grid item md={3} lg={3} >
                    
                 <Button    color="secondary"
                                variant="contained" endIcon={<CloudUploadIcon />} >Upload</Button>
                                
                    </Grid>       
                    <Grid item md={5} lg={5}>
                        <FormControl className={classes.field}>
                            <FormLabel>Estado</FormLabel>
                            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                                <FormControlLabel value="complete" control={<Radio />} label="Completo" />
                                <FormControlLabel value="incomplete" control={<Radio />} label="Incompleto" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item>
                            <Button 
                                type="submit"
                                color="primary"
                                variant="contained"
                                endIcon={<AddIcon />}
                            >
                                
                                Cadastrar
                            </Button >
                        </Grid>
                    </Grid>
                </Grid>
            </form>


        </Container>

    );
}

export default AddItem;