import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ItemList from './components/ItemList';
import './style.css';


const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <ItemList />
  </StrictMode>
);
