import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteConfirmationModal from './DeleteConfirmation';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';


const MainPost = ({email,date,title,description}) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    
    const handleBackClick = () => {
        navigate(-1);
      };

    const handleDeletePost = () => {
        setIsModalOpen(true);
        
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false);
    // TODO:Add logic to delete the post
    console.log('Post deleted!');
    setShowSuccessModal(true);
};
const handleCloseSuccessModal =() =>{
  setShowSuccessModal(false);
  setTimeout(() => {
    navigate('/dalportfoliosDiscussions');
}, 1000);
}
    
return (
  <Grid container justifyContent="center" style={{ padding: '5px' }}>
    <Grid item xs={12} md={8} lg={6}>
      <Card variant="outlined" style={{ background: '#D6D5D6', padding: '16px', width: '100%' }}>
        <CardContent>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <IconButton aria-label="go-back" onClick={handleBackClick}>
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="delete" onClick={handleDeletePost}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Typography variant="h5"  style={{ color: 'black', fontWeight: 250, borderBottom: '2px solid #FFC300', paddingBottom: '0.5px', marginTop: '10px' }}>
            {title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Posted by {email} on {date}
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
        <Typography>Post deleted successfully!</Typography>
    </DialogContent>
    <DialogActions>
        <Button style={{ color: 'black'}} onClick={handleCloseSuccessModal}>Close</Button>
    </DialogActions>
</Dialog>
</Grid>
);
}
export default MainPost;