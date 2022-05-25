import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1.5rem;
  background: ${(props) => (props.secondary ? "white" : "palevioletred")};
  border-radius: 12px;
  margin: 1rem;
  text-transform: uppercase;
`;

const StyledButtonEdited = styled(StyledButton)`
  background: green;
`;

function CustomButton({ children, secondary = false }) {
  return (
    <StyledButtonEdited secondary={secondary}>{children}</StyledButtonEdited>
  );
}

export default CustomButton;
