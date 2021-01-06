import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { DropzoneArea } from 'material-ui-dropzone';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const DropZoneFiles = () => {
  const [files, setFiles] = useState([]);

  return (
    <StyledWrapper>
      <DropzoneArea
        acceptedFiles={['image/*', 'video/*', 'application/*']}
        onAdd={(fileObjs) => {
          setFiles(fileObjs);
          console.log(files);
        }}
        showFileNames
        dropzoneText="Drag and Drop files PDF for analyze"
        showAlerts={false}
        filesLimit={20}
      />
    </StyledWrapper>
  );
};

export default DropZoneFiles;
