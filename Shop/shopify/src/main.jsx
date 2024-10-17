import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,  // This makes sure the home route '/' renders the Home component
        element: <Home/>,
      },
      // {
      //   path: 'contact',
      //   element: <Contact />,
      // },
      // {
      //   path: 'about',
      //   element: <About />,
      // },
      // {
      //   path: 'shop',
      //   element: <Shop/>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
