import styled from "styled-components";

export const SideCon = styled.img`
  width: 45px;
  display: block;
  background-color: transparent;
 
  @media screen and (min-width: 2000px) {
    width: 100px;
  }

  @media screen and (min-width: 1200px) {
    width: 60px;
  }

  @media screen and (min-width: 800px) {
    width: 55px;
  }

`;

export const Wrapper = styled.div`
  /* display: block; */
  color: black;
  background-color: none;
  position: absolute;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
`;

export const SideWrapper = styled.div`

`;