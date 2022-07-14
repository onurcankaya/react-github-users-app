import axios, { AxiosError } from 'axios'
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

    try {
      const response = await axios(`${ROOT_URL}/rate_limit`)
      const { remaining } = response.data.rate
      setRemainingRequests(remaining)
      if (remaining === 0) {
        setError('Sorry, you have exceeded your hourly limit!')
      }
    } catch (error) {
      const typedError = error as Error | AxiosError
      if (axios.isAxiosError(typedError)) {
        setError(`Not able to fetch remaining requests. ${typedError.message}.`)
      } else {
        setError('There was an error while fetching remaining requests...')
      }
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

    try {
      const userResponse = await axios(`${ROOT_URL}/users/${user}`)
      const { data } = userResponse
      setGithubUser(data)
      const { login, followers_url } = data

      const response = await Promise.allSettled([
        axios(`${ROOT_URL}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])

      const [repos, followers] = response
      const isFulfilled = 'fulfilled'

      if (repos.status === isFulfilled) {
        const reposData = await repos.value.data
        setRepos(reposData)
      } else {
        setError('There was an error while fetching repos...')
      }
      if (followers.status === isFulfilled) {
        const followersData = await followers.value.data
        setFollowers(followersData)
      } else {
        setError('There was an error while fetching followers...')
      }
      setIsLoading(false)
    } catch (error) {
      const typedError = error as Error | AxiosError
      if (axios.isAxiosError(typedError)) {
        setError(`Not able to fetch the user. ${typedError.message}.`)
      } else {
        setError('There was an error while fetching the user...')
      }
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
