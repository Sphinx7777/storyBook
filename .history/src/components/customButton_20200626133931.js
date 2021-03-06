import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';


export default {
  title: 'Button',
  component: Button,
};

export const CustomButton = () => <button onClick={action('clicked')}>Hello</button>;