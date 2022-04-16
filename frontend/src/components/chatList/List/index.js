import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useHistory } from "react-router-dom";
import {
  ListContainer,
  RelativeContainer,
  ListTopInnerGrid,
  ListFlexTop,
  ListImg,
  TextLgDark,
  Textflex,
  TextMdDark,
  TextSmGray,
  TextMdGray,
  ListTopGrid,
  DownFlexcontain,
  ArchiveIcon,
  SubscribeContainer,
  DownIcon,
  SheduleListcontainer,
  SheduleListItem,
  SheduleContainer,
} from "./styles";

function List() {
  const [openSheduleList, setOpenSheduleList] = useState(false);
  const [selected, setSelected] = useState(0);
  const history = useHistory();

  const handleClick = () => {
    setOpenSheduleList((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpenSheduleList(false);
  };

  const subscribeListData = [
    {
      title: "unscheduled",
      id: 0,
    },
    {
      title: "phone",
      id: 1,
    },
    {
      title: "project",
      id: 2,
    },
    {
      title: "onsite",
      id: 3,
    },
    {
      title: "offer",
      id: 4,
    },
    {
      title: "hired",
      id: 5,
    },
  ];
  return (
    <ListContainer>
      <ListFlexTop onClick={() => history.push("/messages/id")}>
        <ListImg src="https://res.cloudinary.com/dqzqilslm/image/upload/v1648816314/media/images/Emmanuel-Jacob.png" />
        <ListTopGrid>
          <TextLgDark>Donny Dey</TextLgDark>
          <ListTopInnerGrid>
            <Textflex>
              <TextMdDark>Donny</TextMdDark>
              <TextSmGray>YESTERDAY</TextSmGray>
            </Textflex>
            <TextMdGray>
              Hope it is good today cause we are doing good tonight Hope it is
              good today cause we are doing good tonight Hope it is good today
              good today cause we are doing good tonight Hope it is good today
              good today cause we are doing good tonight Hope it is good today
              good today cause we are doing good tonight Hope it is good today
              good today cause we are doing good tonight Hope it is good today
              cause we are doing good tonight Hope it is good today cause we are
              doing good tonight
            </TextMdGray>
          </ListTopInnerGrid>
        </ListTopGrid>
      </ListFlexTop>
      <DownFlexcontain>
        <Textflex>
          <ArchiveIcon />
          <TextMdGray>Archive</TextMdGray>
        </Textflex>
        <RelativeContainer>
          <ClickAwayListener onClickAway={handleClickAway}>
            <SheduleContainer onClick={handleClick}>
              <SubscribeContainer>
                <TextMdDark>
                  {subscribeListData.map(
                    ({ title, id }) => id === selected && title
                  )}
                </TextMdDark>
                <DownIcon />
              </SubscribeContainer>

              {openSheduleList && (
                <SheduleListcontainer>
                  {subscribeListData.map(({ title, id }) => (
                    <SheduleListItem
                      selected={id === selected}
                      last={id === 5}
                      onClick={() => setSelected(id)}
                    >
                      {title}
                    </SheduleListItem>
                  ))}
                </SheduleListcontainer>
              )}
            </SheduleContainer>
          </ClickAwayListener>
        </RelativeContainer>
      </DownFlexcontain>
    </ListContainer>
  );
}

export default List;
