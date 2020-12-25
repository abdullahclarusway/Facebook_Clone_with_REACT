import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { useStateValue } from "./StateProvider";
import StoryReel from "./StoryReel";

const Feed = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic={user.photoURL}
        message="Wow. This works"
        timestamp="This a timestamp"
        username={user.displayName}
        image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
      />
      <Post
        profilePic={user.photoURL}        
        message="Wow. This works"
        timestamp="This a timestamp"
        username={user.displayName}
        image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
      />
      <Post
        profilePic={user.photoURL}          
        message="Wow. This works"
        timestamp="This a timestamp"
        username={user.displayName}
        image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
      />
    </div>
  );
};

export default Feed;
