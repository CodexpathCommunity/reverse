import styled from "styled-components";
import { HiArchive } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

export const ListContainer = styled.div`
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;
export const ListFlexTop = styled.div`
  padding: 25px;
  display: flex;
  border-bottom: 1px solid #e5e7eb;
`;
export const ListTopGrid = styled.div`
  display: grid;
  grid-gap: 10px;
`;
export const ListTopInnerGrid = styled.div`
  display: grid;
  grid-gap: 6px;
`;

export const ListImg = styled.img`
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin-right: 20px;
  height: 40px;
`;

export const Textflex = styled.div`
  display: flex;
  align-items: center;
`;

export const TextLgDark = styled.h1`
  font-size: 16px;
  color: #050c26;
`;
export const TextMdDark = styled.p`
  font-size: 16px;
  color: #050c26;
  margin-right: 10px;
`;
export const TextSmGray = styled.p`
  font-size: 12px;
  color: #7b91b1;
`;
export const TextMdGray = styled.p`
  font-size: 14px;
  color: #7b91b1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const DownFlexcontain = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;
export const ArchiveIcon = styled(HiArchive)`
  height: 35px;
  color: #7b91b1;
  margin-right: 10px;
`;
export const DownIcon = styled(FiChevronDown)`
  height: 35px;
  color: #7b91b1;
`;
export const RelativeContainer = styled.div`
  height: 40px;
  overflow: visible;
  position: relative;
`;
export const SheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin-left: 30px;

  &:hover {
    border: 1px solid #94a3b8;
  }
`;
export const SubscribeContainer = styled.div`
  padding: 2px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  width: 140px;
`;
export const SheduleListcontainer = styled.div`
  z-index: 99px;
  display: grid;
  width: 100%;
  background-color: #ffffff;
`;

export const SheduleListItem = styled.p`
  font-size: 16px;
  color: #050c26;
  padding: 6px 15px;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: ${({ last }) => (last ? "none" : "1px solid #E5E7EB")};
  background: ${({ selected }) => (selected ? "#dde9f8" : "none")};

  &:hover {
    background-color: #dde9f8;
  }
`;
