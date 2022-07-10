import noop from 'lodash/noop'
import { createContext, useEffect, useState } from 'react'

import { Follower, GithubUser, Repo } from '../types'

import mockFollowers from './mockData/mockFollowers'
import mockRepos from './mockData/mockRepos'
import mockUser from './mockData/mockUser'

const ROOT_URL = 'https://api.github.com'

type GithubContextType = {
  githubUser: GithubUser
  repos: Repo[]
  followers: Follower[]
  searchGithubUser: (query: string) => void
  remainingRequests: number
  error: string
}

const initialContextValue: GithubContextType = {
  githubUser: mockUser,
  repos: mockRepos,
  followers: mockFollowers,
  searchGithubUser: noop,
  remainingRequests: 0,
  error: '',
}

export const GithubContext =
  createContext<GithubContextType>(initialContextValue)

export const GithubProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [remainingRequests, setRemainingRequests] = useState(0)
  const [error, setError] = useState('')

  const fetchRequests = async (): Promise<void> => {
    setError('')
    const response = await fetch(`${ROOT_URL}/rate_limit`)
    const data = await response.json()
    const { remaining } = data.rate
    setRemainingRequests(remaining)
    if (remaining === 0) {
      setError('Sorry, you have exceeded your hourly limit!')
    }
  }

  useEffect(() => {
    try {
      fetchRequests()
    } catch (error) {
      throw new Error()
    }
  }, [])

  const searchGithubUser = async (query: string) => {
    try {
      if (query === '') {
        setError('Please type a username to search')
      } else {
        const BASE_URL = `${ROOT_URL}/users/${query}`

        const userResponse = await fetch(BASE_URL)

        if (userResponse.status >= 200 && userResponse.status < 300) {
          const userData = await userResponse.json()
          setGithubUser(userData)

          const reposResponse = await fetch(`${BASE_URL}/repos?per_page=100`)
          const reposData = await reposResponse.json()
          setRepos(reposData)

          const followersResponse = await fetch(`${BASE_URL}/followers`)
          const followersData = await followersResponse.json()
          setFollowers(followersData)
        }
      }
    } catch (error) {
      throw new Error()
    }
  }

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        searchGithubUser,
        remainingRequests,
        error,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
