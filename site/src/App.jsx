import { useState } from 'react'
import './App.css'
import { NavBar } from './components/navBar'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang')?? 'EN');
  // const router  = createBrowserRouter([])

  return (
  <>
    <NavBar lang={lang} setLang={(lang) => {localStorage.setItem("lang", lang); setLang(lang); }}/>
    {/* <RouterProvider router={router}/> */}
  </>
  )
}

export default App
