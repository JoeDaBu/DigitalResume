import styled from "styled-components";

export const Header = styled.h1`
  width: 50%
`;

export const LabelF = styled.div`
  display: block;
  /* flex-direction: column; */
  width: 50%;
  /* align-items: left; */
  background-color: purple;
  offset-position: right;
  margin: auto
`;

// export const TextBox = styled.input`
//   border: 1px solid black;
//   background-color: white;
//   border-radius: 5px;
// `;

export const FieldID = styled.div`
  /* display: inline; */
  font-weight: bold;
`;

export const TextBox = styled.textarea`
  display: inline;
  align-items: center;
  resize: none;
  /* border: 5px solid black; */
  border: 0px;
  border-radius: 100px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: brown;
`;

export const MessageBox = styled.textarea`
  display: inline;
  width: 100%;
  resize: none;
  margin: 0;
  padding: 0;
  border: 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* background-color: white; */
`;