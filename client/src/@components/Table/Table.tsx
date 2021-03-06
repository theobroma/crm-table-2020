import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ClientsItemType } from '../../@store/clients/types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props {
  data: ClientsItemType[];
}

const TableFC: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Клиент</TableCell>
            <TableCell align="right">Скидка тип</TableCell>
            <TableCell align="right">Потрачено</TableCell>
            <TableCell align="right">СК.Сумма</TableCell>
            <TableCell align="right">Скидка процент</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((client: ClientsItemType) => (
            <TableRow key={client._id}>
              <TableCell component="th" scope="row">
                {client.fullName}
              </TableCell>
              <TableCell align="right">{client.discountType}</TableCell>
              <TableCell align="right">{client.spentSum}</TableCell>
              <TableCell align="right">
                {(client.spentSum * client.discountProcent) / 100}
              </TableCell>
              <TableCell align="right">{client.discountProcent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableFC;
