import noop from 'lodash/noop'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

import { Follower, GithubUser, Repo } from '../types'

const ROOT_URL = 'https://api.github.com'

type GithubContextType = {
  githubUser: GithubUser | null
  repos: Repo[]
  followers: Follower[]
  searchGithubUser: (user: string) => void
  remainingRequests: number
  error: string
  setError: Dispatch<SetStateAction<string>>
  isLoading: boolean
}

const initialContextValue: GithubContextType = {
  githubUser: null,
  repos: [],
  followers: [],
  searchGithubUser: noop,
  remainingRequests: 0,
  error: '',
  setError: noop,
  isLoading: false,
}

export const GithubContext =
  createContext<GithubContextType>(initialContextValue)

export const GithubProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [githubUser, setGithubUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [followers, setFollowers] = useState([])
  const [remainingRequests, setRemainingRequests] = useState(0)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const checkRequests = async (): Promise<void> => {
    setError('')
    setIsLoading(true)
    const response = await fetch(`${ROOT_URL}/rate_limit`)

    if (response.status >= 200 && response.status < 300) {
      const data = await response.json()
      const { remaining } = data.rate
      setRemainingRequests(remaining)
      if (remaining === 0) {
        setError('Sorry, you have exceeded your hourly limit!')
      }
    } else {
      setError('There was an error while fetching remaining requests...')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkRequests()
    setIsLoading(false)
  }, [])

  const searchGithubUser = async (user: string): Promise<void> => {
    setError('')
    setIsLoading(true)
    const userResponse = await fetch(`${ROOT_URL}/users/${user}`)

    if (userResponse.status >= 200 && userResponse.status < 300) {
      const userData = await userResponse.json()
      setGithubUser(userData)
      const { login, followers_url } = userData

      const response = await Promise.allSettled([
        fetch(`${ROOT_URL}/users/${login}/repos?per_page=100`),
        fetch(`${followers_url}?per_page=100`),
      ])

      const [repos, followers] = response
      const isFulfilled = 'fulfilled'

      if (repos.status === isFulfilled) {
        const reposData = await repos.value.json()
        setRepos(reposData)
      } else {
        setError('There was an error while fetching repos...')
      }

      if (followers.status === isFulfilled) {
        const followersData = await followers.value.json()
        setFollowers(followersData)
      } else {
        setError('There was an error while fetching followers...')
      }
      setIsLoading(false)
    } else {
      setError('There was an error while fetching users...')
      setIsLoading(false)
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
        setError,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
