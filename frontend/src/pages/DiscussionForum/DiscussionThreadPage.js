import React from 'react';
import { useLocation } from 'react-router-dom';
import ReplyDisplay from 'components/DiscussionForum/ReplyDisplay';
import MainPost from 'components/DiscussionForum/MainPost';

const DiscussionThread = () => {
    const location = useLocation();
    const { id, email, title, description,date,replies} = location.state;
    const reversedReplies = replies.slice().reverse();
    return (
        <div>
        <MainPost
           id={id}
           email={email}
           date={date}
           title={title}
           description={description}
        />
        {reversedReplies && reversedReplies.map((reply) => (
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