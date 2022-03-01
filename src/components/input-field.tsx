import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid #000000;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 30px;
  &:focus {
    outline: none;
    border: 2px solid #000000;
  }
`;

export default StyledInput;
