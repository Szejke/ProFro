import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { TextField, Paper, IconButton, Fab } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Add from '@material-ui/icons/Add';

const StyledWrapper = styled.div`
  padding: 2rem 2rem 0 0;
  display: flex;
`;
const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 1rem;
`;

const StyledTag = styled.div`
  margin-right: 1rem;
`;

const StyledFab = styled.div`
  margin-left: 2rem;
`;

const InputArray = ({ id, label, variant, tags, setTags }) => {
  const MAX_NAME_LENGTH = 30;
  const [tag, setTag] = useState('');
  const [tagError, setTagError] = useState(false);

  const setValidTag = (string) => {
    if (string.length < MAX_NAME_LENGTH) {
      setTag(string);
    }
  };

  const tagtValidate = (value) => {
    const validValue = value && value.replace(/\s{2,}/g, ' ');
    if (value !== validValue) {
      setTag(validValue);
    }
    const isError = !validValue || validValue.length < 1;
    setTagError(isError);
    return isError;
  };

  const onSubmit = () => {
    const error = tagtValidate(tag);
    if (!error) {
      setTags([
        ...tags,
        {
          id: tags.length,
          word: tag.toLowerCase(),
        },
      ]);
      setTag('');
    }
  };

  const deleteTag = (index) => {
    setTags(tags.filter((e, i) => index !== i));
  };

  return (
    <>
      <StyledWrapper>
        <TextField
          id={id}
          error={tagError}
          label={label}
          value={tag}
          helperText="Max Name Length 30"
          variant={variant}
          onChange={(evt) => {
            setValidTag(evt.target.value);
          }}
        />
        <StyledFab>
          <Fab size="small" color="primary" onClick={onSubmit}>
            <Add />
          </Fab>
        </StyledFab>
      </StyledWrapper>
      <StyledTags>
        {tags.length > 0 && (
          <Paper>
            <StyledTags>
              {tags.map((item, index) => (
                <StyledTag key={item.id}>
                  <p>
                    {index + 1}. {item.word}
                  </p>
                  <IconButton aria-label="delete" onClick={() => deleteTag(index)}>
                    <DeleteForeverIcon fontSize="large" />
                  </IconButton>
                </StyledTag>
              ))}
            </StyledTags>
          </Paper>
        )}
      </StyledTags>
    </>
  );
};

InputArray.propTypes = {
  id: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      word: PropTypes.string,
    }),
  ),
  label: PropTypes.string,
  variant: PropTypes.string,
  setTags: PropTypes.func.isRequired,
};

InputArray.defaultProps = {
  tags: [],
  label: 'Outlined',
  variant: 'outlined',
};

export default InputArray;
