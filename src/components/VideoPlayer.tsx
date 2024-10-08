import React from 'react';

interface VideoPlayerProps {
  videoSrc: string;
  title?: string;
}

export function VideoPlayer({ videoSrc, title }: VideoPlayerProps) {
  return (
    <div className="video-player-container">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <video
        controls
        width="640"
        height="360"
        className="max-w-full h-auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}