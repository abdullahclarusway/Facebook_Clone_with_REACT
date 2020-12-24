import React from 'react';
import Story from './Story';
import "./StoryReel.css";

const StoryReel = () => {
    return (
        <div className= "storyReel">
            <Story 
                image = "https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/41490/b33007d4-d140-45a8-b42b-b79b61d016e2.PNG"
                profileSrc = "https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg"
                title = "Victor Hu"
            />
            <Story
                image = "  https://mk0hootsuiteblof6bud.kinstacdn.com/wp-content/uploads/2019/09/best-instagram-apps.jpg"
                profileSrc = "https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695985-stock-illustration-male-avatar.jpg"
                title = "Maddison"
            />
            <Story 
                image = "https://en.promorepublic.com/wp-content/uploads/2019/03/93123f37e35fc967faa08454ed74929f-576x1024.jpg "
                profileSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU"
                title = "Walter"
            />
            <Story 
                image = " https://www.adweek.com/wp-content/uploads/2018/02/Instagram-Stories-Type-Font-Button-558x1024.png "
                profileSrc = "https://cdn4.vectorstock.com/i/1000x1000/71/98/male-avatar-profile-icon-round-man-face-vector-18307198.jpg"
                title = "Edward"
            />
            <Story 
                image = " https://i.pinimg.com/originals/ba/f2/31/baf231431e35dc7e2057338dcf987640.jpg "
                profileSrc = "https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg"
                title = "John Smith"
            />
            
        </div>
    )
}

export default StoryReel
