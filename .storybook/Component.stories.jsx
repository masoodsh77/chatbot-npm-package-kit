import React from 'react';
import { ChatButton } from '../src/index.jsx';

export default {
  component: ChatButton,
  argTypes: {
    position: {
      control: 'select',
      options: ['bottom-right', 'bottom-left'],
    },
    message: {
      control: 'text',
    },
  },
  title: 'ChatBot',
};

export const ChatBot = () => (
  <ChatButton
    message="Hi Welcome To the ChatBot how can i help you ?"
    position="bottom-right"
  />
);
