import { RouterProvider } from "react-router-dom"
import { router } from "./Components/Router"
import { Toaster } from 'react-hot-toast';


function App() {


  return (
    <div className="container mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
