import React from "react";
import {
  MessageBodyContainer,
  MessageMyEnd,
  MessageUserEnd,
  RecieverFlex,
  SenderFlex,
  UserAvatar,
} from "./styles";

const MessageSender = ({ last }) => (
  <>
    <SenderFlex tail={last}>
      <MessageMyEnd tail={last}>
        Hi Donny, I love working in a company cause the experience pushes me to
        do more and the team makes me more productive, I enjoy coding and
        building creative applications. I'm positive and proactive, the type
        that gets the work done before the deadline. I've gained experience
        working in a professional environment and work great remotely with git,
        github, Trello and great at communication. I've developed frontend
        features for companies with the tech stack. I can build frontend and
        fullstack applications with Javascript, Reactjs, Tailwind CSS, Material
        UI, Redux, Node, MongoDb and other npm packages that can get the job
        done. You can check out my github page to see what type of projects I've
        built in the past. Till then best regards. github.com/CodexpathCommunity
      </MessageMyEnd>
      {last && <UserAvatar src="./donnydey.jpg" />}
    </SenderFlex>
  </>
);

const MessageReciever = ({ last }) => (
  <>
    <RecieverFlex tail={last}>
      {last && <UserAvatar src="./donnydey.jpg" />}
      <MessageUserEnd tail={last}>
        Hi Emmanuel Jacob, I need exactly what is requested below-- if this IS
        exactly YOU-- I will pay for these implementations.. you need strong
        internet connectivity, be available 24/7 minus sleep and time for this
        project 💯..
      </MessageUserEnd>
    </RecieverFlex>
  </>
);

function MessageBody() {
  return (
    <>
      <MessageBodyContainer>
        <MessageSender />
        <MessageSender last />
        <MessageReciever />
        <MessageReciever last />
      </MessageBodyContainer>
    </>
  );
}

export default MessageBody;
