import React from 'react'
import { HeadGridContainer, HeadSelectContainer, LgText, SelectText } from './styles';

function ChatHeader() {
    return (
       <>
       <HeadGridContainer>
        <LgText>Messages</LgText>
        <HeadSelectContainer>
            <SelectText selected >Ongoing</SelectText>
            <SelectText>Archived</SelectText>
        </HeadSelectContainer>
       </HeadGridContainer>
       </>
    )
}

export default ChatHeader
