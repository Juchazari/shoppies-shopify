import React from 'react'
import styled from 'styled-components/macro';

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
  font-size: 16px;
`;

function Input({ ...props }) {
  return (
    <StyledInput {...props}/>
  );
}

export default Input;