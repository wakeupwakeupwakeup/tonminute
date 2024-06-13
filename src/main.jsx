import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/main/MainPage.jsx";
import PlayPage from "./pages/play/PlayPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/play",
        element: <PlayPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
