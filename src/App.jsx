import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import Header from "./components/Header"
import Movies from "./pages/Movies/Movies"
import Favourite from "./pages/Favourite/Favourite"
import Details from "./pages/Movies/movieDetails"
import { Provider } from "react-redux"
import store from "./store/store"


function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/login' element={<Login />} />
            

          <Route path='register' element={<Register />} />
          <Route path='/details/:id' element={<Details />} />




        </Routes>

      </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
