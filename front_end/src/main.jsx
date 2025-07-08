import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { ProposalProvider } from './context/ProposalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProposalProvider>
      <App />
    </ProposalProvider>
  </React.StrictMode>,
)
