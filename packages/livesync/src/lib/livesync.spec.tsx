import { render } from '@testing-library/react';

import Livesync from './livesync';

describe('Livesync', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Livesync />);
    expect(baseElement).toBeTruthy();
  });
});
