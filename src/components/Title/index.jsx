import React from "react";
import styled from "styled-components";

export default function Title(props) {
  const { name } = props;
  return (
    <Titles>
      <h1>{name}</h1>
    </Titles>
  );
}
const Titles = styled.div`
  width: 80%;
  margin: 0px auto;
  text-align: center;
  text-transform: uppercase;
  padding: 25px 0;
  letter-spacing: 2.5px;
`;
