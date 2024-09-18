
import './App.css'
import Home from './Comp/Home'
import Navbar from './Comp/Navbar'
import ScrollToTop from './Comp/ScrollToTop'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { OurTours } from './Comp/OurTours'
import { Reviews } from './Comp/Reviews'
import { Contact } from './Comp/Contact'
import { Footer } from './Comp/Footer'

function App() {


  return (
    <>
          <BrowserRouter>
          <ScrollToTop/>
            <Navbar />

                  <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/tours' element={<OurTours/>} />
                        <Route path='/review' element={<Reviews/>} />
                        <Route path='/contact' element={<Contact/>} />
                  </Routes>
                  <Footer/>
          </BrowserRouter>
      {/* <Navbar/> */}
      {/* <h1 className="text-3xl font-bold underline bg-sky-300">
      Hello world!
    </h1> */}
    </>
  )
}

export default App
