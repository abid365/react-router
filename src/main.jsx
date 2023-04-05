import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
/* existing imports */
import Root, { loader as rootLoader } from './routes/root';
import Contact from "./routes/contact";
/* previous imports */
import ErrorPage from './error-page';


// other imports
// import Root, { loader as rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
       {
      path: 'contacts/:contactId',
      element: <Contact />,
    },
  ],
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
