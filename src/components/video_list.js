import React from 'react';
import VideoListItem from './video_list_item'

// functional componenet takes props as an arguement
// a class component could access props via this.props instead of passing in as argument
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        video = {video}
      />
    )
  })

  return (
    <ul className="col-md-10 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
