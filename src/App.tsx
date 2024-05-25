import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainPage from "./MainPage"
import SingleCharacterPage from "./SingleCharacterPage"



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/id",
    element: <SingleCharacterPage />
  },
])



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
