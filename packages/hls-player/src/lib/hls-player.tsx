import React, { useState, useRef } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

interface LiveSyncPlayerProps extends ReactPlayerProps {
  url: string;
}

export const LiveSyncPlayer: React.FC<LiveSyncPlayerProps> = ({ url, ...props }) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [isLive, setIsLive] = useState(false);

   const handleSeekToLive = () => {
    if (playerRef.current) {
      const player = playerRef.current.getInternalPlayer();
      if (player) {
        player.currentTime = player.duration - 10;
      }
    }
  };


  return (
    <div className="video-player">
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls={true}
        width="300px"
        height="100%"
        playing={true}
        onProgress={(progress) => {
          if (!isLive && progress.playedSeconds > 10) {
            setIsLive(true);
          }
        }}
        hlsConfig={{
          enableWorker: true, // Enable Web Worker for performance
          startLevel: -1, // Start level (-1 for auto)
          autoStartLoad: true, // Auto start loading
          capLevelToPlayerSize: true, // Cap the quality to the player size
          adaptiveMaxWidth: 1280, // Maximum width for adaptive quality
          adaptiveMaxHeight: 720, // Maximum height for adaptive quality
          maxBufferLength: 60, // Maximum buffer length in seconds
          maxMaxBufferLength: 600, // Maximum maximum buffer length in seconds
          maxBufferSize: 20 * 1000 * 1000, // Maximum buffer size in bytes
        }}
        {...props}
      />
        <div className="color-red" onClick={handleSeekToLive}>
          LIVE
        </div>
    </div>
  );
};

export default LiveSyncPlayer;
