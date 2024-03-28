import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <p>This is the HOME Page!</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export default Home;
