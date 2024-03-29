import React from 'react';
import { useLocation } from 'react-router-dom';
import ReplyDisplay from 'components/DiscussionForum/ReplyDisplay';
import MainPost from 'components/DiscussionForum/MainPost';

const DiscussionThread = () => {
    const location = useLocation();
    const { id, email, title, description,date,replies} = location.state;
    return (
        <div>
        <MainPost
           id={id}
           email={email}
           date={date}
           title={title}
           description={description}
        />
        {replies && replies.map((reply) => (
             <div key={reply.id}>
             <ReplyDisplay
             email={reply.userName}
             date={reply.date}
             description={reply.description}
            />
            </div>
            ))}
      </div>
    );
    
};

export default DiscussionThread;