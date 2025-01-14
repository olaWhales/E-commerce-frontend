import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import route from './routes/route.jsx'
import HomePage from './auth/homePage.jsx'

const router = createBrowserRouter([...route])

function App() {

  return (
    <>
      <div>
        <RouterProvider router = {router}/>
      </div>
    </>
  );
}

export default App
