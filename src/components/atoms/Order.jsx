import React from "react";
import styled from "styled-components";

function Order({ displayAlpha, displayAlphaHandler }) {
  return (
    <Wrapper>
      <Text>Order:</Text>
      <Select
        name="Order"
        id="order"
        value={displayAlpha}
        onChange={(e) => displayAlphaHandler(e.target.value)}
      >
        <option value="false">None</option>
        <option value="true">Display choices in Alphabetical</option>
      </Select>
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

const Select = styled.select`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  flex-grow: 1;
  font-family: "Work Sans";
`;

export default Order;
