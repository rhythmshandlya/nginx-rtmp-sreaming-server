import HSLPlayer from './player/player';

interface LivesyncProps {}

function Livesync(props: LivesyncProps) {
  return (
    <div>
      <h1>Welcome to Livesync!</h1>
      <HSLPlayer src="your_hls_stream_url_here" />
    </div>
  );
}

export { HSLPlayer,  Livesync, LivesyncProps};
