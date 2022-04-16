import React from "react";
import {
  HeadGrid,
  HeadImg,
  ScreenHeaderContainer,
  ScreenTextLg,
  ScreenTextMd,
  ScreenTextSm,
  TimesIcon,
} from "./styles";

function MessageHeader() {
  return (
    <>
      <ScreenHeaderContainer>
        <HeadImg src="./donnydey.jpg" />
        <HeadGrid>
          <ScreenTextLg>Donny Dey</ScreenTextLg>
          <div>
            <ScreenTextMd>A directory of online experts</ScreenTextMd>
            <ScreenTextSm>Last seen 15hrs</ScreenTextSm>
          </div>
        </HeadGrid>
        <TimesIcon />
      </ScreenHeaderContainer>
    </>
  );
}

export default MessageHeader;
