import React from 'react';
import { useLocation } from 'react-router-dom';
import ReplyDisplay from '../components/discussion_forum/replydisplay';
import MainPost from '../components/discussion_forum/mainpost';

const DiscussionThread = () => {
    const location = useLocation();
    const { id, email, title, description,date,replies} = location.state;
    return (
        <div>
        <MainPost
           email={email}
           date={date}
           title={title}
           description={description}
        />
        {replies && replies.map((reply) => (
             <div key={reply.id}>
             <ReplyDisplay
             email={reply.email}
             date={reply.date}
             description={reply.description}
            />
            </div>
            ))}
      </div>
    );
    
};

export default DiscussionThread;