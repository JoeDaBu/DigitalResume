import styled from "styled-components";

export const Header = styled.h1`
  width: calc(70% - 10px);
  font-size: 6vh;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 1vh;
`;

export const LabelF = styled.div`
  display: block;
  height: 100%;
  width: calc(60%);
  background-color: purple;
  margin: 0;
`;

export const FieldID = styled.h2`
  /* display: inline; */
  position: relative;
  font-weight: normal;
  font-size: 3vh;
  margin-top: calc(3vh - 10px);
  margin-bottom: calc(2vh);
`;

export const TextBox = styled.textarea`
  position: relative;
  display: inline;
  resize: none;
  border: 1px solid orange;
  border-radius: 5px;
  height: 4vh;
  padding: 4px 0 2px 5px;
  width: calc(100% - 7px);
  background-color: brown;
  font-size: 3vh;
`;

export const MessageBox = styled.textarea`
  display: inline;
  resize: none;
  padding: 1px;
  width: calc(100% - 4px);
  border-radius: 5px;
  border: 1px solid black;
  font-size: 2vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  height: 100%;
`;

export const Submit = styled.input`
  border-radius: 5px;
  width: 25vh;
  height: 4vh;
  margin-top: calc(2vh);
  font-size: 3vh;
`;