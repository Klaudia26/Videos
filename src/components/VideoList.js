import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  const renderList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleClick={props.handleClick}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
