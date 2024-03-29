import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteConfirmationModal from './DeleteConfirmation';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReplyDisplay = ({ id, email, date, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const navigate = useNavigate();

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
        replyId: id,
      };
      // const response =await POST('api/discussionforum/delete-post', payload);
      // console.log(response);
      console.log('Reply deleted!');
      setShowSuccessModal(true);
    }
    catch (error) {
      setShowFailureModal(true);
      console.error('Error deleting reply:', error);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setTimeout(() => {
      navigate('/dalportfolios-discussion-thread');
    }, 1000);
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
