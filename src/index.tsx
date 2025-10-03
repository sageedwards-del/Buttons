import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ColorGrid from './ColorGrid';

// Note that if you wanted to use dependency injection here, you could create a UseState...
// const [example, setExample] = useState<null>(null);
// and provide it to different components of the app so they share the same state
// <Component param={example} setParam={setExample} />
// <OtherComponent param={example} setParam={setExample} />

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorGrid />
  </React.StrictMode>
);
