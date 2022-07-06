import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { GithubProvider } from './context/context'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
)
