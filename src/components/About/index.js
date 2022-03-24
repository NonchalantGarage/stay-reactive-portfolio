import React from 'react'
import './about.css';

function About(){
    return(
        <div  className = "about" id ="about">
             <img src={require('../../assets/Selfie.png')} alt="Selfie"/>
            <p>Hi! I'm Curtis Hong, a life-long learner, currently enrolled in UC Berkeley's Full Stack Web Development Program. My short-term goal is build the skillset to be employer-competitive by 2022 and make a career switch from the accounting/finance industry to technology. My long-term vision is to create change in the world by building powerful applications that enable thought leaders to change the culture and the status quo, making a positive impact for our environment and communities.
              <br>
              
              </br>
                Other interests include creating content, specifically in video production and photography. Cycling is my passion - my intent is to inspire others to ride by showcasing experiences and the beauty of cycling.
            </p>
        </div>
    )
}

export default About;