import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/Homepage"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import PageNotFound from "./Pages/PageNotFound"

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="services" element={<Services />} />
    <Route path="About" element={<About />} />
    <Route path="Portfolio" element={<Portfolio />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  </BrowserRouter>

}

export default App;
