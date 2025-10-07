import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import Inicio from './pages/Inicio'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainHeader />

        <Routes>
          <Route path='/' element={<Inicio />} />
        </Routes>

        <MainFooter />
      </BrowserRouter>

    </>
  )
}

export default App
