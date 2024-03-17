import type { Meta, StoryObj } from '@storybook/react';
import { HlsPlayer } from './hls-player';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof HlsPlayer> = {
  component: HlsPlayer,
  title: 'HlsPlayer',
};
export default meta;
type Story = StoryObj<typeof HlsPlayer>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to HlsPlayer!/gi)).toBeTruthy();
  },
};
