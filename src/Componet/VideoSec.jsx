import React from 'react';

const VideoSec = () => {
  return (
    <section className='Video-sec'>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata" 
        width="100%"
        onError={(e) => console.error('Video error:', e)}
      >
        <source src="./assets/img/pnp-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
    </section>
  );
};

export default VideoSec;
