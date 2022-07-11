import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  children: React.ReactElement
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user

  if (!isUser) {
    return <Navigate to='/login' replace />
  }
  return children
}
