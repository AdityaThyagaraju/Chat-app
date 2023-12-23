import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChatSection from './components/ChatsSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatSection />
  </React.StrictMode>
);
