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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import TableData from "./TableData";
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

function SearchLego(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [searchNumber, setSearchNumber] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");
  const [error, setError] = useState(false);
  const [rows, setRows] = useState([]);
  const handleClose = (event, reason) => {
    setOpen(false);
  }
   const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchNumber === "")  {
      setOpen(true);
    } else {
      setOpen(false);

      setError(false);

      
      const result = await axios
        .get("http://localhost:8080/product/"+searchNumber)
        .then((response) => {
            console.log("ok");
          console.log(response.data);
          if (response.data==''){
            setOpen(true);
          }else{
          setRows([response.data]);
          }
        })
        .catch(() => {setOpen(true);} );
        
      
    }
  };
  function createData(
    nameSet,
    numberSet,
    complete,
    value,
    description,
    linkImage
  ) {
    return { nameSet, numberSet, complete, value, description, linkImage };
  }
  

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item md={12} lg={12} xs={12}>
            <Typography variant="h4" color="textSecondary" component="h2">
              Busca Lego
            </Typography>
          </Grid>

          <Grid item md={8} lg={8}>
            <TextField
              onChange={(e) => setSearchNumber(e.target.value)}
              label="Número Set"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            />
          </Grid>

          <Grid item md={4} lg={4}>
            <Button
            type="submit"
              color="primary"
              size="large"
              variant="contained"
              endIcon={<SearchIcon />}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>

      <TableData rows={rows} />
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
                  Não Encontrado
                </Alert>
              </Snackbar>
    </Container>
  );
}

export default SearchLego;
