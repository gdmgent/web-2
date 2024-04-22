import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ROUTES from './constants/routes';
import Base from './layouts/Base';
import Sidebar from './layouts/Sidebar';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const myCustomRouter = createBrowserRouter([
  {
    element: <Base />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />
      },
      {
        path: ROUTES.ABOUT,
        element: <About />
      },
      {
        element: <Sidebar />,
        children: [
          {
            path: ROUTES.CONTACT,
            element: <Contact />
          },
          {
            path: ROUTES.BLOG,
            element: <Blog />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCustomRouter} />
  </React.StrictMode>,
)
