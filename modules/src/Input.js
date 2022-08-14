import { useCallback, useState } from 'react';

const Button = (props) => {
  const [value, setValue] = useState('');
  const handleInputChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [props.onClick]
  );

  return <input onChange={handleInputChange} value={value} />;
};

export default Button;
