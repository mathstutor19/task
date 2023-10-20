import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home';

function App() {

  return (
    <div className='app__wrapper'>
      <Sidebar />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
