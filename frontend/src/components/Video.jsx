import React, { useRef } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import tiktokVideo from '../videos/Download.mp4';
import './video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

export default function Videoss({url}) {
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (videoRef.current) {
      // Check if the play function is available before calling it
      if (typeof videoRef.current.play === 'function') {
        videoRef.current.play();
      }
    }
  };

  return (
    <div>
     
      <Video autoPlay loop onClick={handleVideoPress} ref={videoRef}>
        <source src={tiktokVideo} type="video/mp4" />
      </Video>
      <VideoFooter channel="frank" description="He is the man of great Kindness" song="come home"/>
      <VideoSidebar likes={111} shares={222}/>
    </div>
  );
}
