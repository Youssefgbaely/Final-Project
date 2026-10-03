
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import Store from './Store/index.jsx'

createRoot(document.getElementById('root')).render(
    <Store>
        <App />
    </Store>
)


//npm install tailwindcss @tailwindcss/vite formik yup
