import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './LoginPage/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* for contact page */}
    <App /> 

    {/* for login page */}
    {/* <AuthProvider>
    <App />
    </AuthProvider> */}
  </StrictMode>,
)
