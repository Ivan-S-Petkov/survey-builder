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
`;

const Text = styled.div`
  width: 35%;
`;

const Value = styled.div`
  display: flex;
  gap: 15px;
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
