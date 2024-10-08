import React from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

export function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="youtube-player-container">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}