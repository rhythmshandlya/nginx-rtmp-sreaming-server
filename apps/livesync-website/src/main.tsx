import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Livesync } from '@livesync/livesync'
import { Ui } from '@livesync/ui';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Livesync />
    <Ui />
    <App />
  </StrictMode>
);
