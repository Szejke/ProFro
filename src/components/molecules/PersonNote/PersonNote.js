import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AwatarPerson from 'components/atoms/AwatarPerson/AwatarPerson';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux';
import { removePersonAction } from 'actions';
import defaultAvatar from 'assets/default-avatar.png';

const StyledWrapper = styled.div`
  display: flex;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  border-radius: 10px;
  padding: 2%;
  max-width: 70rem;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledParagraphs = styled.div`
  margin-left: 30px;
`;

const StyledButton = styled.div`
  margin-left: auto;
  align-self: flex-end;
`;

const DeleteIcon = styled(DeleteForeverIcon)`
  && {
    font-size: 40px;
  }
`;

const StyledH1 = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const PersonNote = ({ id, title, awatarUrl, mail, positionJob, relationWords, removePerson }) => {
  const [relationWordsState] = useState(relationWords);

  return (
    <StyledWrapper>
      <AwatarPerson
        src={awatarUrl}
        onError={(e) => {
          e.target.src = defaultAvatar;
        }}
      />
      <StyledParagraphs>
        <StyledH1>{title}</StyledH1>
        <p>{mail}</p>
        <p>{positionJob}</p>
        {relationWordsState.map((item) => (
          <span key={item.id}>{item.word} </span>
        ))}
      </StyledParagraphs>
      <StyledButton>
        <IconButton aria-label="delete" onClick={() => removePerson(id)}>
          <DeleteIcon />
        </IconButton>
      </StyledButton>
    </StyledWrapper>
  );
};

PersonNote.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  awatarUrl: PropTypes.string,
  mail: PropTypes.string.isRequired,
  positionJob: PropTypes.string,
  relationWords: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      word: PropTypes.string,
    }),
  ),
  removePerson: PropTypes.func.isRequired,
};

PersonNote.defaultProps = {
  positionJob: null,
  relationWords: [
    {
      id: null,
      word: null,
    },
  ],
  awatarUrl: defaultAvatar,
};

const mapDispathToProps = (dispatch) => ({
  removePerson: (id) => dispatch(removePersonAction(id)),
});

export default connect(null, mapDispathToProps)(PersonNote);
