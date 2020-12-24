import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-maennlicher-avatar-hersteller.jpg "
        message="Wow. This works"
        timestamp="This a timestamp"
        username="Abdullah"
        image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
      />
      <Post
        profilePic="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-maennlicher-avatar-hersteller.jpg "
        message="Wow. This works"
        timestamp="This a timestamp"
        username="Abdullah"
        image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
      />
      <Post
        profilePic="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-maennlicher-avatar-hersteller.jpg "
        message="Wow. This works"
        timestamp="This a timestamp"
        username="Abdullah"
        image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
      />
    </div>
  );
};

export default Feed;
