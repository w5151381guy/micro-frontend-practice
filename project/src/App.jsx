import React from 'react';
import ReactDOM from 'react-dom/client';

const Button = React.lazy(() => import('modules/Button'));
const Input = React.lazy(() => import('modules/Input'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => (
  <React.StrictMode>
    <div>Project</div>
    <React.Suspense fallback={null}>
      <div>
        <Input />
        <Button />
      </div>
    </React.Suspense>
  </React.StrictMode>
);

root.render(<App />);
