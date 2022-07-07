import { useContext } from 'react'
import { MdBusiness, MdLink, MdLocationOn } from 'react-icons/md'
import styled from 'styled-components'

import { GithubContext } from '../context/context'

export const Card = () => {
  const { githubUser } = useContext(GithubContext)
  const {
    avatar_url,
    name,
    html_url,
    bio,
    company,
    location,
    blog,
    twitter_username,
  } = githubUser

  return (
    <Wrapper>
      <Header>
        <Image src={avatar_url} alt={name} />
        <div>
          <Name>{name}</Name>
          <Twitter>{twitter_username}</Twitter>
        </div>
        <Follow href={html_url} target='_blank'>
          Follow
        </Follow>
      </Header>
      <Bio>{bio || 'No bio'}</Bio>
      <Details>
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn /> {location || 'internet'}
        </p>
        <a href={`https://${blog}`}>
          <MdLink />
          {blog}
        </a>
      </Details>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--color-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
`
const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1rem;
`
const Image = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`
const Name = styled.h4`
  margin-bottom: 0.25rem;
`
const Twitter = styled.p`
  margin-bottom: 0.25rem;
`
const Follow = styled.a`
  color: var(--color-grey-5);
  border: 1px solid var(--color-grey-5);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    background: var(--color-grey-5);
    color: var(--color-white);
  }
`
const Bio = styled.p`
  color: var(--color-grey-3);
`
const Details = styled.div`
  p,
  a {
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
    color: var(--color-grey-3);
    svg {
      margin-right: 0.5rem;
      font-size: 1.3rem;
    }
  }
  a {
    text-decoration: underline;
  }
`
