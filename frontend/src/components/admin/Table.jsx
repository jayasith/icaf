import React from 'react';
import './style/table.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 65,
  },
});


export default function Table(props) {
  const classes = useStyles();

  return (
      <div className="table">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>{props.topic}</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">TOPIC</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.Tablecontent.map((paper) => (
            <TableRow key={paper._id}>
              <TableCell align="center">{paper.topic}</TableCell>
              <TableCell align="center">{paper.isApproved}</TableCell>
              <TableCell align="center">{paper.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}