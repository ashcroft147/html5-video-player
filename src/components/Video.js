import React from 'react';

const Video = ({params}) => {
    return (
        <div className='video'>
            <p> Video</p>
            <video width="640" height="360" poster="media/poster_PayPal_Austin2.jpg" controls>
                <source src="https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;