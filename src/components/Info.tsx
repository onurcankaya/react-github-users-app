import { useContext } from 'react'
import { FiUserPlus, FiUsers } from 'react-icons/fi'
import { GoGist, GoRepo } from 'react-icons/go'
import styled from 'styled-components'

import { GithubContext } from '../context'

export const Info = (): JSX.Element => {
  const { githubUser } = useContext(GithubContext)
  const { followers, following, public_gists, public_repos } = githubUser

  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'Repos',
      value: public_repos,
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'Followers',
      value: followers,
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'Following',
      value: following,
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'Gists',
      value: public_gists,
    },
  ]

  return (
    <Wrapper>
      {items.map((item) => (
        <Item key={item.id}>
          <Icon>{item.icon}</Icon>
          <div>
            <Value>{item.value}</Value>
            <Label>{item.label}</Label>
          </div>
        </Item>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  padding-bottom: 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`
const Item = styled.div`
  border-radius: var(--radius);
  padding: 1rem 2rem;
  background: var(--color-white);
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 3rem;
  align-items: center;
`
const Icon = styled.span`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
  background-color: var(--color-grey-8);
  color: var(--color-grey-3);
`
const Value = styled.h3`
  margin-bottom: 0;
  letter-spacing: 0;
`
const Label = styled.p`
  margin-bottom: 0;
  text-transform: capitalize;
`
