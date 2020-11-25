import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledWrapper = styled.div`
  minwidth: 650;
`;

const LinksHeader = () => (
  <StyledWrapper>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Mail</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">etc</TableCell>
            <TableCell align="right">etc</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Cze
            </TableCell>
            <TableCell align="right">1 rec</TableCell>
            <TableCell align="right">2 rec</TableCell>
            <TableCell align="right">3 rec</TableCell>
            <TableCell align="right">4 rec</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </StyledWrapper>
);

export default LinksHeader;
