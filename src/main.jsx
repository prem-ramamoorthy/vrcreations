import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './MainPage/MainPage'
import Protfolio from './ProtfolioPage/Protfolio'
import ContactUsPage from './contactUsPage/ContactUsPage'
import AboutUs from './aboutUs/AboutUs'
import ServicePage from './Services/ServicePage'
import Signin from './signupPage/Signin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },

  {
    path: "/contactus",
    element: <ContactUsPage />
  },
  {
    path: "/services",
    element: <ServicePage />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/protfolio",
    element: <Protfolio />
  },
  {
    path: "/signin",
    element: <Signin />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)