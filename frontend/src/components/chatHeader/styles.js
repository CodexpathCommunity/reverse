import styled from "styled-components";

export const HeadGridContainer = styled.div`
 display: grid;
 grid-gap: 18px;
 padding: 0px;
`
export const HeadSelectContainer = styled.div`
 display: flex;
 align-items: center:
 justify-content: space-around;
`
export const LgText = styled.div`
 font-size: 32px;
 color: #162040;
`

export const SelectText = styled.p`
 font-size: 16px;
 padding-bottom: 6px;
 cursor: pointer;
 margin: ${({selected})=> selected ? "0 15px 0 0" : "0 0 0 15px"};
 color: ${({selected})=> selected ? "#050c26" : "#717584"};
 border-bottom: ${({selected})=> selected ? "2px solid #050c26" : "none"};
`