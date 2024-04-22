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
import BlogPost from './pages/BlogPost';

async function loadPosts() {
  const response = await fetch('/src/data/posts.json');
  const posts = await response.json();
  return posts;
}

// loadPost die op basis van een slug een post kan returnen.
async function loadPost(slug) {
  const posts = await loadPosts();
  return posts.find(post => post.slug === slug)
}

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
            element: <Blog />,
            loader: loadPosts
            // Geef alle posts door vanuit mijn JSON.
          },
          {
            path: `${ROUTES.BLOG}/:postSlug`,
            element: <BlogPost />,
            loader: ({params}) => loadPost(params.postSlug)
            // Geef éen post door op basis van postSlug
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
