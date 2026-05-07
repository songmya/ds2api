import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import App from './App.jsx'
import { I18nProvider } from './i18n'
import './styles.css'

const basename = import.meta.env.MODE === 'production' ? '/admin' : '/'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nProvider>
            <BrowserRouter basename={basename}>
                <App />
                <SpeedInsights />
            </BrowserRouter>
        </I18nProvider>
    </React.StrictMode>,
)
