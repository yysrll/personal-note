import React from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from './MyApp';

const root = createRoot(document.getElementById('root'));
root.render(<MyApp/>);