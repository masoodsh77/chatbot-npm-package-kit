import React, { useCallback, useState } from 'react';
import { Icon } from '@iconify/react';
import { Button, ContainerRight, ContainerLeft } from './style';
import ChatPage from './components/ChatPage';

interface Props {
  position: 'bottom-right' | 'bottom-left';
  message: string;
}

const ChatButton = ({ message, position }: Props) => {
  const [open, setOpen] = useState(false);

  if (position === 'bottom-left') {
    return (
      <ContainerLeft>
        {open && (
          <ChatPage
            position={position}
            message={message}
            onClose={() => setOpen(false)}
          />
        )}
        <Button onClick={() => setOpen(!open)}>
          <Icon icon="mynaui:chat-dots" width={32} height={32} />
        </Button>
      </ContainerLeft>
    );
  } else {
    return (
      <ContainerRight>
        {open && (
          <ChatPage
            position={position}
            message={message}
            onClose={() => setOpen(false)}
          />
        )}
        <Button onClick={() => setOpen(!open)}>
          <Icon icon="mynaui:chat-dots" width={32} height={32} />
        </Button>
      </ContainerRight>
    );
  }
};

export { ChatButton };
