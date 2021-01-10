import React from 'react';
import styled from 'styled-components/macro';
import { DropzoneArea } from 'material-ui-dropzone';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const DropZoneFiles = ({ setFiles }) => {
  const handleChange = (file) => {
    setFiles(file);
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
    </StyledWrapper>
  );
};
DropZoneFiles.propTypes = {
  setFiles: PropTypes.func.isRequired,
};

export default DropZoneFiles;
