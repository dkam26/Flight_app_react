import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const Flights =({flight})=>{
  const classes = useStyles();

    return(
   <div className="Flight">
         <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Airline</TableCell>
                <TableCell align="center">Origin</TableCell>
                <TableCell align="center">Destination</TableCell>
                <TableCell align="center">Available_seats</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Plane number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flight.map(flight => (
                <TableRow key={flight.id}>
                  <TableCell component="th" scope="row">
                  {flight.Airline}
                  </TableCell>
                  <TableCell align="center">{flight.Origin}</TableCell>
                  <TableCell align="center">{flight.Destination}</TableCell>
                  <TableCell align="center">{flight.available_seats}</TableCell>
                  <TableCell align="center">{flight.Date}</TableCell>
                  <TableCell align="center">{flight.Plane_number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
   </div>
    );


}
export default Flights;