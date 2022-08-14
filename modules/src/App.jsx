import React from 'react';
import ReactDOM from 'react-dom/client';

import Button from './Button';
import Input from './Input';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => (
  <React.StrictMode>
    <Input />
    <Button />
  </React.StrictMode>
);

root.render(<App />);
