import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PersonNote from 'components/molecules/PersonNote/PersonNote';

const StyledWrapper = styled.div`
  display: flex;
  background: white;
  padding: 2%;
  flex-direction: column;
`;

const ListPersonNote = ({ workers }) => (
  <StyledWrapper>
    {workers.map(({ id, title, awatarUrl, mail, positionJob, relationWords }) => (
      <PersonNote
        key={id}
        id={id}
        title={title}
        awatarUrl={awatarUrl}
        mail={mail}
        positionJob={positionJob}
        relationWords={relationWords}
      />
    ))}
  </StyledWrapper>
);

const mapStateToProps = (state) => {
  const { workers } = state;
  return { workers };
};

ListPersonNote.propTypes = {
  workers: PropTypes.arrayOf(
    PropTypes.shape({
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

ListPersonNote.defaultProps = {
  workers: [],
};

export default connect(mapStateToProps)(ListPersonNote);
