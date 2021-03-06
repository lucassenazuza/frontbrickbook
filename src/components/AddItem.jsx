import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Alert, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import axios from "axios";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  row: {
    display: "flex",
    padding: 10,
    margin: 10,
  },
  item: {
    margin: 5,
    padding: 5,
    justifyContent: "right",
  },
});


function AddItem(props) {
  const classes = useStyles();
  const [nameSet, setNameSet] = useState("");
  const [numberSet, setNumberSet] = useState("");
  const [description, setDescription] = useState("");
  const [complete, setComplete] = useState("complete");
  const [value, setValue] = useState(0.0);
  const [selectedFile, setSelectedFile] = useState("");
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [error, setError] = useState(false);
  
  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };
  const handleReset = () => {
    Array.from(document.querySelectorAll('input'));
    this.setState({
      itemvalues: [{}]
    });
  };
  const handleClose = (event, reason) => {
      setOpen(false);
    }

  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(nameSet==="" || numberSet == ""){
    setOpen(true);
    }
    else{
      setOpen(false)

      

    
    setError(false);
    
    var formData = new FormData();
    var completeBoolean = complete == "complete" ? true : false;
    formData.append("imageFile", selectedFile);
    formData.append("numberSet", numberSet);
    formData.append("nameSet", nameSet);
    formData.append("complete", completeBoolean.toString());
    formData.append("description", description);
    formData.append("value", value.toString());
    const result = await axios
      .post("http://localhost:8080/product", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => console.log("error"));
    console.log("Aguardando post");
    const json = await result;
    setNameSet("");
    setNumberSet("");
    setDescription("");
    setComplete("complete");
    setValue(0.0);
    setSelectedFile("");
    setIsFilePicked(false);
    window.location.reload();
    
  }
  
  };

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="row">
          <Grid item md={12} lg={12} xs={12}>
            <Typography variant="h4" color="textSecondary" component="h2">
              Cadastrar Lego
            </Typography>
          </Grid>
          <Grid item md={8} lg={8} xs={8}>
            <TextField
              onChange={(e) => setNameSet(e.target.value)}
              label="Nome Set"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            />
          </Grid>
          <Grid item md={4} lg={4}>
            <TextField
              onChange={(e) => setNumberSet(e.target.value)}
              label="N??mero Set"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            />
          </Grid>
          <Grid item md={12} lg={12}>
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              label="Descri????o"
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
              onChange={(e) => setValue(parseFloat(e.target.value))}
              label="Valor"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            />
          </Grid>
          <Grid item md={2} lg={2}>
            <Typography variant="h6" color="#000">
              Foto do Set(.jpg)
            </Typography>
          </Grid>
          <Grid item md={3} lg={3}>
            {/* <Button color="secondary"
                            variant="contained"  type="file" name="file" endIcon={<CloudUploadIcon />} 
                            onClick={handleClick}> Upload</Button> */}

            <div>
              <input type="file" name="file" onChange={changeHandler} />
            </div>
          </Grid>
          <Grid item md={5} lg={5}>
            <FormControl className={classes.field}>
              <FormLabel>Estado</FormLabel>
              <RadioGroup
                value={complete}
                onChange={(e) => setComplete(e.target.value)}
              >
                <FormControlLabel
                  value="complete"
                  control={<Radio />}
                  label="Completo"
                />
                <FormControlLabel
                  value="incomplete"
                  control={<Radio />}
                  label="Incompleto"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<AddIcon />}
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  Complete as informa????es Necess??rias
                </Alert>
              </Snackbar>
      </form>
    </Container>
  );
}


export default AddItem;
