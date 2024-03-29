import React from "react";
import styled from "styled-components";

function Type({ type, required, clickHandler }) {
  return (
    <Wrapper>
      <Text>Type:</Text>
      <Value>
        <span>{type}</span>
        <Input
          type="checkbox"
          checked={required}
          onChange={(e) => clickHandler(e.target.checked)}
        />
        <Required>A Value is required</Required>
      </Value>
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

const Value = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 550px) {
    margin-top: 4px;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
`;

const Required = styled.span`
  color: darkgray;
`;

export default Type;
