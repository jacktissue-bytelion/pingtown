import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const tableStyles = makeStyles((theme) => ({
  tableHeaderCell: {
    ...theme.typography.h6,
  },
  tableRowCell: {},
  tableRowCellOdd: {
    background: theme.palette.grays.light,
  },
}));

const gridStyles = makeStyles((theme) => ({
  gridRow: {
    borderBottom: `1px solid ${theme.palette.grays.border}`,
  },
  gridRowOdd: {
    background: theme.palette.grays.light,
  },
}));

const TableBase = ({
  data, headers, label, responsiveLayout,
}) => {
  const tableClasses = tableStyles();
  const gridClasses = gridStyles();

  return (
    <>
      <Hidden mdDown={responsiveLayout}>
        <TableContainer>
          <Table aria-label={label}>
            {headers && (
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableCell className={tableClasses.tableHeaderCell}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
            )}
            <TableBody>
              {data.map((row, rowIndex) => (
                <TableRow key={row}>
                  {Object.keys(row).map((cell) => (
                    <TableCell
                      className={clsx(tableClasses.tableRowCell, {
                        [tableClasses.tableRowCellOdd]: rowIndex % 2 === 0,
                      })}
                    >
                      {row[cell]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Hidden>
      {responsiveLayout && (
        <Hidden lgUp={responsiveLayout}>
          {data.map((row, rowIndex) => (
            <Box
              className={clsx(gridClasses.gridRow, {
                [gridClasses.gridRowOdd]: rowIndex % 2 === 0,
              })}
              px={2}
              py={2}
            >
              <Grid container>
                {Object.keys(row).map((cell, cellIndex) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Box mb={2} pr={4}>
                      {headers && (
                        <Box>
                          <Typography variant="h6">{headers[cellIndex]}</Typography>
                        </Box>
                      )}
                      <Typography>{row[cell]}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Hidden>
      )}
    </>
  );
};

export default TableBase;
