import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
`;

const Button = () => {
  const handleButtonClick = () => {
    alert('Button Click');
  };

  return <StyledButton onClick={handleButtonClick}>我是按鈕</StyledButton>;
};

export default Button;
