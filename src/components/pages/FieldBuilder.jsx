import React from "react";
import styled from "styled-components";
import MultiSelect from "../organism/MultiSelect";
import Error from "../atoms/Error";

function FieldBuilder() {
  return (
    <Wrapper>
      <Error />
      <Header>Field Builder</Header>
      <MultiSelect />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 50%;
  margin: 0 auto;
  border: 2px solid #c6daf8;
  border-radius: 7px;
  box-sizing: border-box;
  position: relative;
`;

const Header = styled.div`
  padding: 7px;
  font-size: 20px;
  color: #355d99;
  background-color: #c6daf8;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-sizing: border-box;
  font-weight: 600;
`;

export default FieldBuilder;
