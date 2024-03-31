//Author: Sushank Saini
import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteConfirmationModal from './DeleteConfirmation';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useState } from 'react';
import {POST} from 'utils/axios';

const ReplyDisplay = ({postId, id, email, date, description, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  
  console.log("postId:", postId);
  console.log("replyid:", id);

  const handleDeleteReply = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    setIsModalOpen(false);
    try {
      const payload = {
        postId:postId,
        replyId: id,
      };
      const response =await POST('api/discussionforum/delete-reply', payload);
      console.log(response);
      console.log('Reply deleted!');
      onDelete(id);
      setShowSuccessModal(true);
    }
    catch (error) {
      setShowFailureModal(true);
      console.error('Error deleting reply:', error);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleCloseFailureModal = () => {
    setShowFailureModal(false);
  };

  return (
    <Grid container justifyContent="center" style={{ padding: '5px' }}>
      <Grid item xs={12} md={8} lg={6}>
        <Card variant="outlined" style={{ background: '#DDDDDD', padding: '16px', width: '100%', position: 'relative' }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <IconButton aria-label="delete" onClick={handleDeleteReply} style={{ position: 'absolute', top: 25, right: 30 }}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Reply from {email} on {date}
            </Typography>
            <Typography variant="body1">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <DeleteConfirmationModal open={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDelete} />
      <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Reply deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'black' }} onClick={handleCloseSuccessModal}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showFailureModal} onClose={() => setShowFailureModal(false)}>
        <DialogTitle>Failure</DialogTitle>
        <DialogContent>
          <Typography>There was an error. Please try again.</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'black' }} onClick={handleCloseFailureModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default ReplyDisplay;
