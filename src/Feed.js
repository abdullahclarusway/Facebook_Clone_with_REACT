import React, {useState, useEffect} from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc)=>({id:doc.id , data :doc.data() }))) 
      );
     
    }, []);
    
    return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://i.imgur.com/I80W1Q0.png"
        message="Wow. This works"
        timestamp="This a timestamp"
        username="Abdullah"
        image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
      />
     <Post
        profilePic="https://i.imgur.com/I80W1Q0.png"
        message="Wow. This works"
        timestamp="This a timestamp"
        username="Abdullah"
        image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
      />
      <Post
      profilePic="https://i.imgur.com/I80W1Q0.png"
      message="Wow. This works"
      timestamp="This a timestamp"
      username="Abdullah"
      image="https://i.pinimg.com/originals/49/5b/a7/495ba7b612cdcd7512bab89570486364.jpg"
    />
    </div>
  );
};

export default Feed;
