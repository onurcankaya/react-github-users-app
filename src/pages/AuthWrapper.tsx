import { useAuth0 } from '@auth0/auth0-react'

import { Loader } from '../components'

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, error } = useAuth0()

  if (isLoading) return <Loader />

  if (error) return <div>Ooops... {error.message}</div>

  return <>{children}</>
}
