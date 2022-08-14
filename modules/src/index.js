import React from 'react';
import { render } from 'react-dom';

import Button from './Button';
import Input from './Input';

const App = () => (
  <div>
    <Input />
    <Button />
  </div>
);

render(<App />, document.getElementById('root'));
