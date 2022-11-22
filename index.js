import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { element } from 'prop-types';
import PrivacyPage from './pages/PrivacyPage';
import HelpCenter from './pages/HelpCenterPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/privacy',
    element: <PrivacyPage />
  },
  {
    path: '/help',
    element: <HelpCenter />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
