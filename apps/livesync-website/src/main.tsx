import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {Livesync} from '@livesync/livesync'

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Livesync/>
    <App />
  </StrictMode>
);
