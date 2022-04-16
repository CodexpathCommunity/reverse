import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const ScreenHeaderContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e7eb;
`;

export const HeadImg = styled.img`
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin-right: 20px;
  height: 50px;
`;

export const HeadGrid = styled.div`
  display: grid;
  grid-gap: 4px;
  flex-grow: 1;
`;

export const TimesIcon = styled(GrClose)`
  height: 18px;
  width: 18px;
  cursor: pointer;
  color: #385075;
`;

export const ScreenTextLg = styled.h1`
  font-size: 18px;
  color: #162040;
`;
export const ScreenTextSm = styled.h6`
  font-size: 14px;
  font-weight: 400;
  color: #7b91b1;
`;
export const ScreenTextMd = styled.h5`
  font-size: 14px;
  font-weight: 500;
  color: #162040;
`;
