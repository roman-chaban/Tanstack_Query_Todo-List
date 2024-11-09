import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

rootElement.style.fontFamily = 'Arial, sans-serif';

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
