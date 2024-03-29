import React from "react";
import styled from "styled-components";
import Button from "./Button";

function List({ choices, removeChoice }) {
  return (
    <Wrapper>
      <Text></Text>
      <Values>
        {choices.map((choice) => (
          <Choice key={choice}>
            <Text>
              {choice.slice(0, 10)}
              <RedText>{choice.slice(10)}</RedText>
            </Text>
            <Button
              text="X"
              padding="3px"
              color="#7e1919"
              clickHandler={() => removeChoice(choice)}
            />
          </Choice>
        ))}
      </Values>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  width: 55%;
  flex-grow: 1;

  @media (max-width: 550px) {
    width: auto;
  }
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
  width: 100%;
`;

const Choice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px) {
    margin-left: 15px;
  }
`;

const RedText = styled.span`
  background-color: #7e1919;
  color: white;
`;

export default List;
