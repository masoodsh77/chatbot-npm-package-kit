import React from 'react';
import {
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
} from '../style';
import { Icon } from '@iconify/react';

interface Props {
  position: 'bottom-right' | 'bottom-left';
  message: string;
  onClose: () => void;
}
export default function ChatPage({ position, message, onClose }: Props) {
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
}
