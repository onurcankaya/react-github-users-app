import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AuthWrapper, Dashboard, Login, NotFound, PrivateRoute } from './pages'

export function App(): JSX.Element {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </AuthWrapper>
  )
}
