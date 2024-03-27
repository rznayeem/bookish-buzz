import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import ListedBooks from './Pages/ListedBooks/ListedBooks';
import PagesRead from './Pages/PagesRead/PagesRead';
import Contact from './Pages/Contact/Contact';
import BookDetails from './components/BookDetails/BookDetails';
import About from './Pages/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json'),
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
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
