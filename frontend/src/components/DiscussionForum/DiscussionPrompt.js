import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import StartDiscussion from './StartThreadForm';

//To ask user if they wish to start a disucssion
const DiscussionPrompt = () => {
  const [isStartDiscussionOpen, setStartDiscussionOpen] = useState(false);
  
  const handleStartDiscussionClick = () => {
    setStartDiscussionOpen(true);
  };

return (
      <>
      {!isStartDiscussionOpen && (
        <Paper style={{ background: '#DDDDDD', padding: '16px', textAlign: 'center', minHeight: '212px', top: 200 }}>
          <Typography variant="h5" style={{ marginTop: '20px', color: 'black', fontWeight: 500 }}>
            Do you have a question or an idea to share?
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: '20px', color: 'white', backgroundColor: 'black' }}
            onClick={handleStartDiscussionClick}
          >
            Start a Discussion
          </Button>
        </Paper>
      )}
      {isStartDiscussionOpen && <StartDiscussion onClose={() => setStartDiscussionOpen(false)} />}
    </>
);
};

export default DiscussionPrompt;