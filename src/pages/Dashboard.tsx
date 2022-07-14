import { useContext } from 'react'

import {
  Empty,
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
  const { isLoading, githubUser, repos, followers } = useContext(GithubContext)

  const isEmpty = !githubUser && !repos.length && !followers.length

  if (isLoading)
    return (
      <Layout>
        <Navbar />
        <Loader />
      </Layout>
    )

  if (isEmpty)
    return (
      <Layout>
        <Navbar />
        <Search />
        <Empty />
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
