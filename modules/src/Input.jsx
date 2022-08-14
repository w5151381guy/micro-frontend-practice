import React from 'react';

const Button = (props) => {
  const [value, setValue] = React.useState('');
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return <input onChange={handleInputChange} value={value} />;
};

export default Button;
