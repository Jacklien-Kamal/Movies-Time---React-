import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import Header from "./components/Header"
import Movies from "./pages/Movies/Movies"
import Favourite from "./pages/Favourite/Favourite"
import Details from "./pages/Movies/movieDetails"
import { Provider } from "react-redux"
import store from "./store/store"
import AppLayout from "./AppLayout"
import { useState } from "react"
import { LanguageProvider } from "./context/language"
import Home from "./pages/home/home"
import ControlledCarousel from "./pages/home/home"

const routes=createBrowserRouter([

{path:'/', element:<AppLayout /> ,children:[
{index:true ,element:<Movies /> },
{path:'favourite' ,element:<Favourite /> },
{path:'home' ,element:< ControlledCarousel/> },

{path:'login' ,element:<Login /> },
{path:'register' ,element:<Register /> },


{path:'/details/:id' ,element:<Details /> },


]}

])
function App() {
const [lang,setLang]=useState('en')
  return (
  <LanguageProvider value={{lang,setLang}}>
     <Provider store={store}>
      <RouterProvider router={routes}/>
     
      </Provider>
  </LanguageProvider>
   

  )
}

export default App
