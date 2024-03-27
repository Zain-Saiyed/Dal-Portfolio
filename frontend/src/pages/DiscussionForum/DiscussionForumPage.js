import React, { useState } from 'react';
import DiscussionPrompt from '../../components/discussion_forum/discussionprompt';
import DiscussionPost from '../../components/discussion_forum/discussionpost';
import { Container, Grid } from '@mui/material';
const DiscussionForumPage = () => {
   // Sample dummy data 
   const [posts, setPosts] = useState([
    {
      id: 1,
      email: 'example1@example.com',
      date: '2024-03-16',
      title: 'First Post',
      description: 'This is the description for the first post.',
      replies: [{
        id:1,
        email:'example@dal.ca',
        description: 'Description 1',
        date: 'today'
      },
      {
        id:1,
        email:'example@dal.ca',
        description: 'Description 1',
        date: 'today'
      }],
    },
    {
      id: 2,
      email: 'example2@example.com',
      date: '2024-03-17',
      title: 'Second Post',
      description: 'This is the description for the second post.',
      replies: [{
        id:1,
        email:'example@dal.ca',
        description: 'Description 1',
        date: 'today'
      }
      ],
    },
  ]);

  return (
    <div>
      <Container>
      <Grid container spacing={2} marginTop='10px'>
        <Grid item xs={12} sm={5} md={5} lg={5} justifyContent={"center"}>
          <DiscussionPrompt />
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          {posts.map((post) => (
            <div key={post.id} style={{ marginBottom: '20px' }}>
              <DiscussionPost
                email={post.email}
                date={post.date}
                title={post.title}
                description={post.description}
                replyCount={post.replies.length}
                replies={post.replies}
              />
            </div>
          ))}
        </Grid>
      </Grid>
      </Container>
    </div>
  );
  

};

export default DiscussionForumPage;
