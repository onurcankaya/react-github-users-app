import { useContext } from 'react'
import { MdBusiness, MdLink, MdLocationOn } from 'react-icons/md'
import styled from 'styled-components'

import { GithubContext } from '../context'

import { ExternalLinkButton } from './'

export const Card = (): JSX.Element => {
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
        <ExternalLinkButton href={html_url} target='_blank' rel='noreferrer'>
          Follow
        </ExternalLinkButton>
      </Header>
      <Bio>{bio || 'No bio'}</Bio>
      <Details>
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn /> {location || 'internet'}
        </p>
        <a href={`https://${blog}`} target='_blank' rel='noreferrer'>
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
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--color-white);
    color: var(--color-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    font-size: 1rem;
  }
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
    color: var(--color-grey-3);
    text-decoration: underline;
  }
`
