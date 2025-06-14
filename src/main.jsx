import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ThemeContextProvider>
)
