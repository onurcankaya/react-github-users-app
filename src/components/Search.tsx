import React, { useContext, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import styled from 'styled-components'

import { GithubContext } from '../context'

import { Button } from './'

export const Search = () => {
  const [query, setQuery] = useState('')
  const { searchGithubUser, remainingRequests, error, setError } =
    useContext(GithubContext)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    if (!query) {
      setError('Please type a username to search')
    } else {
      searchGithubUser(query)
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <GoSearch />
        <Input
          type='text'
          placeholder='Search Github users...'
          value={query}
          onChange={handleChangeInput}
        />
        {remainingRequests > 0 && <Button type='submit'>Search</Button>}
      </Form>
      <Requests>Requests: {remainingRequests}/60</Requests>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
  }
`
const Form = styled.form`
  background: var(--color-white);
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.5rem;
  border-radius: var(--radius);
  padding: 0.5rem;

  svg {
    color: var(--color-grey-5);
    font-size: 1.2rem;
    margin: 0.25rem;
  }
`
const Input = styled.input`
  border-color: transparent;
  outline-color: var(--color-grey-10);
  color: var(--color-grey-4);
  padding: 0.5rem;
  font-size: 1rem;
  ::placeholder {
    color: var(--color-grey-7);
  }
`
const Requests = styled.h3`
  margin-bottom: 0;
  color: var(--color-grey-5);
  font-size: 1.25rem;
  font-weight: 400;
`
const ErrorMessage = styled.p`
  margin-bottom: 0;
  color: var(--color-red-light);
`
