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

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'; // '/src/data/posts.json'

async function loadPosts() {
  const response = await fetch(POST_URL);
  const posts = await response.json();
  return posts;
}

// loadPost die op basis van een slug een post kan returnen.
async function loadPost(postId) {
  const response = await fetch(`${POST_URL}/${postId}`);
  const post = await response.json();
  return post;
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
            path: `${ROUTES.BLOG}/:postId`,
            element: <BlogPost />,
            loader: ({ params }) => loadPost(params.postId)
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
