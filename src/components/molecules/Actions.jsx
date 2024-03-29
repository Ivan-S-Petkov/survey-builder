import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

function Actions({ save, clear, cancel }) {
  return (
    <Wrapper>
      <Column>
        <Button
          text="Clear"
          color="white"
          background="#7e1919"
          clickHandler={clear}
        />
      </Column>
      <Buttons>
        <Button
          text="Save Changes"
          color="white"
          background="green"
          clickHandler={save}
        />
        <span>Or</span>
        <Button text="Cancel" color="red" padding="0px" clickHandler={cancel} />
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Column = styled.div`
  width: 35%;
  display: flex;

  @media (max-width: 550px) {
    width: auto;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export default Actions;
