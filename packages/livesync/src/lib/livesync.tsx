import styles from './livesync.module.scss';

/* eslint-disable-next-line */
export interface LivesyncProps {}

export function Livesync(props: LivesyncProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Livesync!</h1>
    </div>
  );
}

export default Livesync;
