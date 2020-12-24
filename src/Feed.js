import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';

const Feed = () => {
    return (
        <div className = "feed">
            <StoryReel/>
            <MessageSender/>

            
            {/* Messagesender */}
        </div>
    )
}

export default Feed
