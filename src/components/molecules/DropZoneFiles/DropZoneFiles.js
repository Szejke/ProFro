import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const DropZoneFiles = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (file) => {
    setFiles(file);
    console.log('handleChange', file);
  };
  const handleClick = () => {
    console.log('handleClick', files);
  };

  return (
    <StyledWrapper>
      <DropzoneArea
        acceptedFiles={['image/*', 'video/*', 'application/*']}
        showFileNames
        dropzoneText="Drag and Drop files PDF for analyze"
        showAlerts={false}
        filesLimit={20}
        onChange={(file) => handleChange(file)}
      />
      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        Add Image
      </Button>
    </StyledWrapper>
  );
};
DropZoneFiles.propTypes = {};

export default DropZoneFiles;
