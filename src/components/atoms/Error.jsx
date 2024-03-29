import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ErrorContext } from "../../provider/ErrorProvider";
import Button from "./Button";

function Error() {
  const { error, removeError } = useContext(ErrorContext);

  function closeHandler() {
    removeError();
  }

  useEffect(() => {
    const timeout = setTimeout(() => closeHandler(), 8000);
    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  if (!error) {
    return <></>;
  }

  return (
    <Wrapper>
      <ErrorContainer>
        {Array.isArray(error) ? (
          error.map((error, index) => <Text key={index}>{error}</Text>)
        ) : (
          <Text>{error}</Text>
        )}
      </ErrorContainer>
      <Button text="X" color="#5c7cac" clickHandler={closeHandler} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #5c7cac;
  background-color: #c6daf8;
  padding: 5px;
  border-radius: 4px;
  left: 50%;
  transform: translate(-50%, 0);
  top: 10px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-family: "Work Sans";
  color: #e22d60;
  font-size: 14px;
  margin: 0px 10px 0px 10px;
`;

export default Error;
