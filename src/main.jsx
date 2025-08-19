import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './MainPage/MainPage'
import Protfolio from './ProtfolioPage/Protfolio'
import ContactUsPage from './contactUsPage/ContactUsPage'
import AboutUs from './aboutUs/AboutUs'
import ServicePage from './Services/ServicePage'
import Signin from './signupPage/Signin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signin />
  </StrictMode>,
)