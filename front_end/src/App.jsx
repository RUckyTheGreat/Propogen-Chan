import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import CoverFormPage from './pages/CoverFormPage'
import IntroFormPage from './pages/IntroFormPage'
import TableOfContentPage from './pages/TableOfContentPage'
import ContentPage from './pages/ContentPage'
import ReferencePage from './pages/ReferencePage'
import About from './pages/About'
import AboutOwner from './pages/AboutOwner'
import StepFormLayout from './components/StepFormLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-owner" element={<AboutOwner />} />
        <Route path="/success" element={<Success />} />

        {/* ✅ Nest form pages dengan layout */}
        <Route element={<StepFormLayout />}>
          <Route path="/cover" element={<CoverFormPage />} />
          <Route path="/intro" element={<IntroFormPage />} />
          <Route path="/toc" element={<TableOfContentPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/reference" element={<ReferencePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
