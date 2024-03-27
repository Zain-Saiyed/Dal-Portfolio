import React from 'react';
import { Card, CardContent, Typography,TextField, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const DiscussionPost = ({ id, email, date, title, description, replyCount,replies }) => {
  const [reply, setReply] = useState('');
  const [replyError, setReplyError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();
  
  const handleTitleClick = () => {
    // If title is clicked then navigate to threads page of that discussion post
    navigate('/dalportfoliosDiscussionThread', { state: { id, email,title, description,date,replies } });
    console.log('Title clicked:', title);
  }; 
  
  const handleReplyChange = (e) => {
    setReply(e.target.value);
    setReplyError('');
  };

  const handleReplySubmit = () => {
      // Reply should not be empty
      if (reply.trim() !== '') {
        console.log(reply);
        setShowSuccessModal(true);
         // TO DO: Insert record in the database for the list of replies for that particular post
        console.log('Reply submitted:', reply);
        setReply('');
      } 
      else {
          // Display an error message or handle empty reply input case
          setReplyError('Reply cannot be empty.');
          console.error('Reply cannot be empty.');
      }
  };

  const handleCloseSuccessModal =() =>{
    setShowSuccessModal(false);
    setTimeout(() => {
      navigate('/dalportfoliosDiscussions');
  }, 500);
  }

    return (
            <> 
            <Card variant="outlined"  onClick={handleTitleClick} sx={{position:'relative',background: '#DDDDDD', padding: '16px', cursor:'pointer','&:hover': {background: '#ffc30080'}}} >
                    <CardContent>
                            <Typography variant="h5" style={{ color: 'black', fontWeight: 250,borderBottom: '2px solid #FFC300',paddingBottom: '0.5px' }}>
                                {title}
                            </Typography>
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                            Posted by {email} on {date}
                        </Typography>
                        <Typography variant="body1">
                            {description}
                        </Typography>
                        <TextField 
                            onClick={(e)=>{e.stopPropagation();
                                return;}}
                            id="reply-input"
                            value={reply}
                            onChange={handleReplyChange}
                            placeholder="Reply to the post"
                            rows={1.5}
                            multiline
                            fullWidth
                            variant="outlined"
                            size="small"
                            style={{ marginTop: '20px', background:'#FFFFFF' }}
                            InputProps={{
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <IconButton onClick={handleReplySubmit} sx={{'&:hover': {color: '#FFFFFF'}}}>
                                          <SendIcon style={{ color: 'black' }}/>
                                      </IconButton>
                                  </InputAdornment>
                              ),
                          }}
                        />
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom style={{ marginTop: '10px', color: 'red' }}>
                            {replyError}
                        </Typography>
                          <Typography variant="body1" color="black" gutterBottom style={{ marginTop: '10px' }}>
                               This post has {replyCount} replies
                        </Typography>
                    </CardContent>
                </Card>
                <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
                   <DialogTitle>Success</DialogTitle>
                     <DialogContent>
                      <Typography>Reply Posted Sucessfully!</Typography>
                     </DialogContent>
                <DialogActions>
                   <Button style={{ color: 'black'}} onClick={handleCloseSuccessModal}>Close</Button>
                </DialogActions>
                </Dialog>
            </>
    );
};

export default DiscussionPost;

