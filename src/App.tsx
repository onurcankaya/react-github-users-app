import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Dashboard, Error, Login } from './pages'

export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}
