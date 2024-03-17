import { render } from '@testing-library/react';

import HlsPlayer from './hls-player';

describe('HlsPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HlsPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
