// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
import { HSLPlayer } from '@livesync/livesync';

export function App() {
  return (
    <div>
      <HSLPlayer src='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' />
    </div>
  );
}

export default App;
