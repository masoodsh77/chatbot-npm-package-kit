import styled from 'styled-components';

export const ContainerLeft = styled.div({
  position: 'absolute',
  bottom: '5rem',
  left: '5rem',
  '@media (max-width: 768px)': {
    left: '1rem',
    bottom: '1rem',
  },
});

export const ContainerRight = styled.div({
  position: 'absolute',
  bottom: '5rem',
  right: '5rem',
  '@media (max-width: 768px)': {
    right: '1rem',
    bottom: '1rem',
  },
});

export const Button = styled.button({
  borderRadius: '50%',
  height: '4rem',
  width: '4rem',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  backgroundColor: 'purple',
});

export const ChatPageContainerRight = styled.div({
  position: 'absolute',
  bottom: '4.5rem',
  right: '0',
  width: '25rem',
  height: '35rem',
  border: '1px solid lightgray',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: 'lightgoldenrodyellow',
  '@media (max-width: 768px)': {
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',
    bottom: '-1rem',
    right: '-1.05rem',
    borderRadius: '0',
  },
});

export const ChatPageContainerLeft = styled.div({
  position: 'absolute',
  bottom: '4.5rem',
  left: '0',
  width: '25rem',
  maxWidth: '25rem',
  height: '35rem',
  border: '1px solid lightgray',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: 'lightgoldenrodyellow',
  '@media (max-width: 768px)': {
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',
    bottom: '-1rem',
    left: '-1.05rem',
    borderRadius: '0',
  },
});

export const ChatPageTitle = styled.div({
  width: '100%',
  backgroundColor: 'purple',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bolder',
});

export const ChatInPutMessage = styled.div({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '4rem',
  backgroundColor: 'lightgray',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bolder',
  gap: '1rem',
});

export const ChatInPut = styled.input({
  height: '3rem',
  width: '100%',
  borderRadius: '8px',
  border: 'none',
  marginLeft: '1rem',
  padding: '0 0.5rem',
});

export const ChatSendButton = styled.button({
  height: '3rem',
  width: '5rem',
  borderRadius: '8px',
  border: 'none',
  marginRight: '1rem',
});

export const MessageContainer = styled.div({
  width: '100%',
  height: '100%',
  overflow: 'auto',
});

export const MessageBubble = styled.div({
  width: '100%',
  height: '4rem',
  display: 'flex',
  alignItems: 'start',
  padding: '1rem',
});

export const MessageAvatar = styled.div({
  width: '2rem',
  height: '2rem',
  maxWidth: '2rem',
  maxHeight: '2rem',
  borderRadius: '50%',
  marginRight: '1rem',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid purple',
});

export const MessageText = styled.div({
  width: '70%',
  padding: '0.5rem',
  backgroundColor: 'lightgreen',
  borderRadius: '8px',
});
