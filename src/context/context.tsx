import { createContext, useState } from 'react'

import { Follower, GithubUser, Repo } from '../types'

import mockFollowers from './mockData/mockFollowers'
import mockRepos from './mockData/mockRepos'
import mockUser from './mockData/mockUser'

// const rootUrl = 'https://api.github.com'

const GithubContext = createContext<{
  githubUser: GithubUser
  repos: Repo[]
  followers: Follower[]
}>({
  githubUser: mockUser,
  repos: mockRepos,
  followers: mockFollowers,
})

const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }
