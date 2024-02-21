import React, { useCallback, useState } from 'react';
import { Icon } from '@iconify/react';
import {
  Button,
  ContainerRight,
  ContainerLeft,
  ChatInPut,
  ChatInPutMessage,
  ChatPageContainerLeft,
  ChatPageContainerRight,
  ChatPageTitle,
  ChatSendButton,
  MessageAvatar,
  MessageBubble,
  MessageContainer,
  MessageText,
} from './style';

const ChatButton = ({ message, position }) => {
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

const ChatPage = ({ position, message, onClose }) => {
  if (position === 'bottom-right') {
    return (
      <ChatPageContainerRight>
        <ChatPageTitle>
          <div style={{ marginLeft: '1rem' }}>ChatBot</div>
          <div
            style={{ marginRight: '1rem', cursor: 'pointer' }}
            onClick={onClose}
          >
            <Icon icon="ep:close-bold" onClick={onClose} />
          </div>
        </ChatPageTitle>
        <MessageContainer>
          <MessageBubble>
            <MessageAvatar>A</MessageAvatar>
            <MessageText>{message}</MessageText>
          </MessageBubble>
        </MessageContainer>
        <ChatInPutMessage>
          <ChatInPut placeholder="Type Message ..." />
          <ChatSendButton>Send</ChatSendButton>
        </ChatInPutMessage>
      </ChatPageContainerRight>
    );
  } else if (position === 'bottom-left') {
    return (
      <ChatPageContainerLeft>
        <ChatPageTitle>
          <div style={{ marginLeft: '1rem' }}>ChatBot</div>
          <div
            style={{ marginRight: '1rem', cursor: 'pointer' }}
            onClick={onClose}
          >
            <Icon icon="ep:close-bold" onClick={onClose} />
          </div>
        </ChatPageTitle>
        <MessageContainer>
          <MessageBubble>
            <MessageAvatar>A</MessageAvatar>
            <MessageText>{message}</MessageText>
          </MessageBubble>
        </MessageContainer>
        <ChatInPutMessage>
          <ChatInPut placeholder="Type Message ..." />
          <ChatSendButton>Send</ChatSendButton>
        </ChatInPutMessage>
      </ChatPageContainerLeft>
    );
  }
};
export { ChatButton };
