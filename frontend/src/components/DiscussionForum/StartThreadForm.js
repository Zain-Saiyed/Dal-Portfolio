import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

//to take user input once user decides to start a discussion 
const StartDiscussion = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const maxTitleCharacters = 200;
  const maxDescriptionCharacters = 6000;

  const updateCharacterCount = (value, maxCharacters, setState, setErrorState) => {
    const characterCount = value.length;
    setState(value);
    setErrorState(characterCount > maxCharacters);
  };

  const handleTitleChange = (event) => {
    updateCharacterCount(event.target.value, maxTitleCharacters, setTitle, setErrorTitle);
  };

  const handleDescriptionChange = (event) => {
    updateCharacterCount(event.target.value, maxDescriptionCharacters, setDescription, setErrorDescription);
  };
  
  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = () => {
    if (!errorTitle && !errorDescription && description.trim() !== '') {
      setShowSuccessModal(true);
      console.log('Title:', title);
      console.log('Description:', description);
      }
      else {
        console.error('Description is required.');
        setErrorMessage('*Description can not be empty.')
      }
  };
  
  const handleCloseSuccessModal =() =>{
    setShowSuccessModal(false);
    onClose();
    navigate('/dalportfoliosDiscussions');
  }
  return (
    <Grid container justifyContent="center">
      <Grid item xs={14} sm={12} md={10} lg={8}>
        <TextField
          label={`Title (${title.length}/${maxTitleCharacters})`}
          fullWidth
          value={title}
          onChange={handleTitleChange}
          multiline
          maxRows={3}
          placeholder='Maximum 200 characters'
          error={errorTitle}
          helperText={errorTitle ? `Title cannot be more than ${maxTitleCharacters} characters` : ''}
          margin="normal"
        />
        <TextField
          label={`Description (${description.length}/${maxDescriptionCharacters})`}
          fullWidth
          required
          multiline
          rows={4}
          maxRows={7}
          placeholder='Maximum 6000 characters'
          value={description}
          onChange={handleDescriptionChange}
          error={errorDescription}
          helperText={errorDescription ? `Description cannot be more than ${maxDescriptionCharacters} characters` : ''}
          margin="normal"
        />
        {errorMessage && (
          <div style={{ color: 'red', marginBottom: '16px' }}>
            {errorMessage}
          </div>
        )}
        <Button variant="contained" onClick={handleSubmit} style={{ marginRight: '8px', color: 'white', backgroundColor: 'black' }}>
          Post
        </Button>
        <Button variant="contained" style={{ color: 'white', backgroundColor: 'black' }} onClick={handleCancel}>
          Cancel
        </Button>
        <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
                   <DialogTitle>Success</DialogTitle>
                     <DialogContent>
                      <Typography>Posted Sucessfully!</Typography>
                     </DialogContent>
                <DialogActions>
                   <Button style={{ color: 'black'}} onClick={handleCloseSuccessModal}>Close</Button>
                </DialogActions>
                </Dialog>
      </Grid>
    </Grid>
  );
};

export default StartDiscussion;
