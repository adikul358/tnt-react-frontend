import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import Article, { loader } from "./pages/Article"
import About from "./pages/About"
import Quote from "./pages/Quote"
import "./index.css"
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_STRAPI_HOST
axios.defaults.headers.common["Authorization"] = "bearer 0a2ad3ed9a7281b638c86afdbd4efeffc16604b23870a40d461dc86d3e7edf81a72859eae7cad8c04471b6d1c02b085ddf9431ce3a3aae52025675b4633afea26823aa4222197a105910b7f4e7349157dabfae31719ecb6222e5cd6d9d534ed548c528508e3e7f158bc76f51ee4bb11d445fe1da04a414f7f821f963900bc16c"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <Article />, loader, errorElement: <h1 className="text-center mt-6 font-mono text-primary-300">404: Not Found</h1>},
      { path: "/about", element: <About /> },
      { path: "/quote", element: <Quote /> },
    ],
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
