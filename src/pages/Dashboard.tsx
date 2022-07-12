import { useContext } from 'react'

import {
  Info,
  Layout,
  Loader,
  Navbar,
  Repos,
  Search,
  User,
} from '../components'
import { GithubContext } from '../context'

export const Dashboard = (): JSX.Element => {
  const { isLoading } = useContext(GithubContext)

  if (isLoading)
    return (
      <Layout>
        <Navbar />
        <Loader />
      </Layout>
    )

  return (
    <Layout>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </Layout>
  )
}
