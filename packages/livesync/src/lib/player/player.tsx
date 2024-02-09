import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      hlsRef.current = new Hls();
      hlsRef.current.loadSource(src);
      hlsRef.current.attachMedia(videoRef.current as HTMLVideoElement);
    } else if ((videoRef.current as HTMLVideoElement).canPlayType('application/vnd.apple.mpegurl')) {
      (videoRef.current as HTMLVideoElement).src = src;
    }
  }, []);

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
