import React from "react";
import styled from "styled-components";

function Button({ text, color, background, padding, clickHandler }) {
  return (
    <Wrapper
      color={color}
      background={background}
      padding={padding}
      onClick={clickHandler}
    >
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  background-color: ${(props) =>
    props.background ? props.background : "none"};
  padding: ${(props) => (props.padding ? props.padding : "10px")};
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
