import React from 'react';
import Button from '../../src/components/Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: { onArchiveTask: { action: 'clicked' } },
};

const Story = args => <Button {...args} />;

// Each story then reuses that template
export const Primary = Story.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
