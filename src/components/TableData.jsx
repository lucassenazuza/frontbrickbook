import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImageIcon from '@mui/icons-material/Image';
import { Icon } from '@material-ui/core';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Republic Frigate',7654, 1452, 'Completo', 23.5),
  createData('Republic Frigate',7654, 1452, 'Completo', 23.5),
  createData('Republic Frigate',7654, 1452, 'Completo', 23.5),
  createData('Republic Frigate',7654, 1452, 'Completo', 23.5),
  createData('Republic Frigate',7654, 1452, 'Completo', 23.5)
];

export default function TableData() {
  return (
    <TableContainer component={Paper} sx={{marginTop: 5}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome Lego</StyledTableCell>
            <StyledTableCell align="right">Número set</StyledTableCell>
            <StyledTableCell align="right">Qtd. Peças</StyledTableCell>
            <StyledTableCell align="right">Estado</StyledTableCell>
            <StyledTableCell align="right">Preço(R$)</StyledTableCell>
            <StyledTableCell align="center">Foto</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="center"><a href="#"><ImageIcon /></a></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}