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
`;

const Text = styled.div`
  width: 35%;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  flex-grow: 1;
`;

export default Order;
