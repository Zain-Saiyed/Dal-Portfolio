import React, { useState, useEffect } from 'react';
import DiscussionPrompt from 'components/DiscussionForum/DiscussionPrompt';
import DiscussionPost from 'components/DiscussionForum/DiscussionPost';
import { Container, Grid } from '@mui/material';
import {GET} from 'utils/axios';
const DiscussionForumPage = () => {
   // Sample dummy data 
   /*const [posts, setPosts] = useState([
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
  ]);*/
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await GET('api/discussionforum/get-all-posts');
        if (response.data && response.data.listOfPosts && Array.isArray(response.data.listOfPosts)) {
          setPosts(response.data.listOfPosts);
        } 
        else {
          console.error('Invalid data format:', response.data);
        }
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
                email={post.userName}
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
