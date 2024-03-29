import React from "react";
import styled from "styled-components";

function TextInput({ text, value, placeholder, handleInput }) {
  const handleChange = (e) => {
    handleInput(e.target.value);
  };

  return (
    <Wrapper>
      <Text>{text}</Text>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: normal;
  }
`;

const Text = styled.div`
  width: 35%;

  @media (max-width: 550px) {
    font-weight: 600;
    width: 100%;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  font-family: "Work Sans";
`;

export default TextInput;
