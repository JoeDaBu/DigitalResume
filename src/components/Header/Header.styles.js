import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* z-index: -100; */
`;

export const LinkH = styled.div`
  color: red;
  margin: 5px;
`;

export const LinkE = styled.div`
  margin: 5px;
  position: absolute;
  right: 5px;
`;

export const SLink =  styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &::visited, &:link, &:active {
    text-decoration: none;
  }
`;