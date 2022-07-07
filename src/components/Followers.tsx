import React from 'react'
import styled from 'styled-components'

import { GithubContext } from '../context/context'

export const Followers = (): JSX.Element => {
  const { followers } = React.useContext(GithubContext)

  return (
    <Wrapper>
      <AllFollowers>
        {followers.map((follower) => {
          const { avatar_url: img, html_url, login, id } = follower
          return (
            <Follower key={id}>
              <Avatar src={img} alt={login} />
              <div>
                <Name>{login}</Name>
                <GithubUrl href={html_url} target='_blank' rel='noreferrer'>
                  {html_url}
                </GithubUrl>
              </div>
            </Follower>
          )
        })}
      </AllFollowers>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--color-white);
  border-radius: var(--radius);
`
const AllFollowers = styled.div`
  overflow: scroll;
  height: 275px;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
  gap: 1.25rem 1rem;
  padding: 1.25rem 2rem;
  margin: 0.5rem 0;

  /* we want to always show the scrollbar */
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 0.75rem;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
const Follower = styled.div`
  transition: var(--transition);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 1rem;
`
const Avatar = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`
const Name = styled.h4`
  margin-bottom: 0.25rem;
`
const GithubUrl = styled.a`
  color: var(--color-grey-3);
  text-decoration: underline;
`
