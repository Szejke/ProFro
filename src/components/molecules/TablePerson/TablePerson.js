import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  min-width: 650;
`;

const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'positionJob',
    label: 'Position',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'mail',
    label: 'Mail',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'relationWords',
    label: 'Relation Words',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
  },
];

const TablePerson = ({ workers }) => {
  return (
    <StyledWrapper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {workers.map(({ id, title, mail, positionJob, relationWords }) => {
              return (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{positionJob}</TableCell>
                  <TableCell>{mail}</TableCell>

                  <TableCell>
                    {relationWords
                      ? relationWords.map((item) => <span key={item.id}>{item.word} , </span>)
                      : console.log('error')}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  const { workers } = state;
  return { workers };
};

TablePerson.propTypes = {
  workers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      positionJob: PropTypes.string,
      awatarUrl: PropTypes.string,
      relationWords: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          word: PropTypes.string,
        }),
      ),
    }),
  ),
};

TablePerson.defaultProps = {
  workers: [
    {
      id: null,
      title: null,
      mail: null,
      relationWords: [
        {
          id: null,
          word: null,
        },
      ],
    },
  ],
};

export default connect(mapStateToProps)(TablePerson);
