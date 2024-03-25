import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import ListedBooks from './Pages/ListedBooks/ListedBooks';
import PagesRead from './Pages/PagesRead/PagesRead';
import Contact from './Pages/Contact/Contact';
import Support from './Pages/Support/Support';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/read',
        element: <PagesRead></PagesRead>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/support',
        element: <Support></Support>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
