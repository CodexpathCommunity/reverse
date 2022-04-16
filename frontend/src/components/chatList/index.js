import React from 'react'
import { ChatListContainer } from './styles';
import List from './List/index';

function ChatList() {
    return (
        <ChatListContainer>
            <List />
            <List />
            <List />
        </ChatListContainer>
    )
}

export default ChatList
