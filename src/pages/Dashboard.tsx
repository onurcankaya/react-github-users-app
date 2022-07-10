import { Info, Layout, Repos, Search, User } from '../components'

export const Dashboard = (): JSX.Element => {
  return (
    <Layout>
      <Search />
      <Info />
      <User />
      <Repos />
    </Layout>
  )
}
