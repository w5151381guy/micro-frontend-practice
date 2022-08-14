import { useCallback } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: '#3f51b5';
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
`;

const Button = (props) => {
  const handleButtonClick = useCallback(() => {
    alert('Button Click');
    if (props.onClick) {
      props.onClick();
    }
  }, [props.onClick]);

  return <StyledButton onClick={handleButtonClick} />;
};

export default Button;
