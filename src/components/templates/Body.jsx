import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../atoms/NotFound";
import Home from "../pages/Home";
import FieldBuilder from "../pages/FieldBuilder";

function Body() {
  return (
    <Wrapper>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FieldBuilder />} />
      </Routes>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex-grow: 1;
`;

export default Body;
