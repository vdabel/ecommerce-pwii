import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHeader from './common/MainHeader'
import Inicio from './pages/Inicio'
import './App.css'
import About from './pages/About';
import MainFooter from './common/MainFooter';

function App() {

  return (
    <>
      <BrowserRouter>
        <MainHeader />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <MainFooter />
      </BrowserRouter>

    </>
  )
}

export default App
