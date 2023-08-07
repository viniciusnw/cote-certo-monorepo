import React from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ImageList, ImageListItem, IconButton, Button, Typography } from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@material-ui/icons';


import ImageUploading from 'react-images-uploading';


type FileUploadProps = {
  multiple: boolean
}

export const FileUpload: React.FC<FileUploadProps> = ({ multiple }) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 20;

  const onChange = (imageList: any, addUpdateIndex: any) => setImages(imageList);

  return (
    <div>
      <ImageUploading
        value={images}
        onChange={onChange}
        multiple={multiple}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          isDragging,
          dragProps,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          onImageRemoveAll,
        }) => (
          <div {...dragProps}>
            {/* <div style={isDragging ? { color: 'red' } : undefined} /> */}
            <InitialActions>
              <Button onClick={onImageUpload} size='small' variant="contained" color="secondary">
                <Typography variant='body2'>
                  Escolher
                </Typography>
              </Button>
              <Button disabled={!!!imageList.length} onClick={onImageRemoveAll} size='small' variant="contained" color="secondary">
                <Typography variant='body2'>
                  {multiple ? 'Apagar todas' : 'Apagar'}
                </Typography>
              </Button>
            </InitialActions>

            <ImageListStyled>
              {imageList.map((image, index) => (
                <ImageListItemStyled key={index}>
                  <img src={image.data_url} alt='' />

                  <ImageListItemButtons>
                    <IconButton onClick={() => onImageUpdate(index)} size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => onImageRemove(index)} size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </ImageListItemButtons>
                </ImageListItemStyled>
              ))}
            </ImageListStyled>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

const InitialActions = styled.div`
  gap: .5rem;
  display: flex;
  margin-bottom: 1rem;
`;

const ImageListStyled = styled(ImageList)`
  overflow: auto;
  max-height: 100vh;
`;


const ImageListItemStyled = styled(ImageListItem)`
  position: relative;
`;

const ImageListItemButtons = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  gap: .5rem;
  display: flex;
  padding: .5rem;
  position: absolute;
  justify-content: end;
  background-color: rgba(0,0,0,.3);
  svg{
    color: ${props => props.theme.palette.common.white}
  }
  ${(props) =>
    css`
      ${props.theme.breakpoints.down("xs")} {
        flex-wrap: wrap;
      }
    `}
`;