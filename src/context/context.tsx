import { createContext, useState } from 'react'

import { Follower, GithubUser, Repo } from '../types'

import mockFollowers from './mockData/mockFollowers'
import mockRepos from './mockData/mockRepos'
import mockUser from './mockData/mockUser'

export const GithubContext = createContext<{
  githubUser: GithubUser
  repos: Repo[]
  followers: Follower[]
}>({
  githubUser: mockUser,
  repos: mockRepos,
  followers: mockFollowers,
})

export const GithubProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  console.log('setGithubUser', setGithubUser)
  console.log('setRepos', setRepos)
  console.log('setFollowers', setFollowers)

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  )
}
