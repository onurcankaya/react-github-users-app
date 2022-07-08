import { Info, Layout, Repos, User } from '../components'

export const Dashboard = (): JSX.Element => {
  return (
    <Layout>
      <Info />
      <User />
      <Repos />
    </Layout>
  )
}
