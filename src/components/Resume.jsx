import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search';
import TableData from './TableData';

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


function Resume(props) {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('money')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
            setTitleError(true)
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
                    alignItems="center"
                    justifyContent="left"

                >
                    <Grid item md={12} lg={12} xs={12}>

                        <Typography
                            variant="h4"
                            color="textSecondary"
                            component="h2"

                        >
                            Busca Lego
                        </Typography>
                    </Grid>


                    <Grid item md={8} lg={8}>
                        <TextField
                            onChange={(e) => setDetails(e.target.value)}
                            label="Número Set"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item md={4} lg={4}>

                        <Button color="primary" size="large" 

                            variant="contained" endIcon={<SearchIcon />} >Buscar</Button>

                    </Grid>
                </Grid>
            </form>

            <TableData />
        </Container>

    );
}

export default Resume;