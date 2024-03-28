import React from "react";
import styled from "styled-components";
import Button from "./Button";

function AddChoice({ choice, choiceHandler, addChoice }) {
  return (
    <Wrapper>
      <Text>Choices:</Text>
      <Data>
        <Input
          type="text"
          name="label"
          id="label"
          value={choice}
          placeholder="Choice"
          onChange={(e) => choiceHandler(e.target.value)}
        />
        <Button
          text="Add"
          color="#355d99"
          background="#c6daf8"
          padding="5px"
          clickHandler={() => addChoice()}
        />
      </Data>
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

const Data = styled.div`
  flex-grow: 1;
  display: flex;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-right: 10px;
`;

export default AddChoice;
