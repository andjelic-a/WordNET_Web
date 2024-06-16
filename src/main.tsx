import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Home from './components/Home/Home.tsx';
import Archive from './components/Archive/Archive.tsx';
import homeLoader from './components/Home/HomeLoader.ts';
import archiveLoader from './components/Archive/ArchiveLoader.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>ERROR ;-;</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/archive",
        element: <Archive />,
        loader: archiveLoader,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
