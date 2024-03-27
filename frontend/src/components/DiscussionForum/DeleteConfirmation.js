import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const DeleteConfirmationModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="delete-confirmation-modal"
      aria-describedby="delete-confirmation-message"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          minWidth: 300,
          textAlign: 'center',
        }}
      >
        <Typography id="delete-confirmation-message" variant="h6" gutterBottom>
          Are you sure you want to delete this post?
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button onClick={onConfirm} variant="contained" sx={{ mr: 2,color: 'white', backgroundColor: 'black' }}>
            Yes
          </Button>
          <Button onClick={onClose} variant="outlined" sx={{ mr: 2,color: 'black',borderColor: 'black' }}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmationModal;
