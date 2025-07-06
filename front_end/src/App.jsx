import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProposalForm from './components/ProposalForm'
import Success from './pages/Success'
import './styles/index.css'

function App() {
  const handleFormSubmit = (formData) => {
    console.log('Data dikirim:', formData)

  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProposalForm onSubmit={handleFormSubmit} />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
