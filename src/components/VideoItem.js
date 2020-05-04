import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, handleClick }) => {
  return (
    <div className="video-item item" onClick={() => handleClick(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.kind}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
