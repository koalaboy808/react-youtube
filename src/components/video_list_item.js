import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  // const video = props.video; // having {video} above is same as this line
  return (
    <li onClick = {() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list meida">
        <img src = {imgUrl} className="media-object" />
      </div>

      <div className="media-body">
        <div className="media-heading"></div>
        {video.snippet.title}
      </div>
    </li>
  )
}

export default VideoListItem;
