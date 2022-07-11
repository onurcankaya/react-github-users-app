import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

import { Button } from './'

export const Navbar = () => {
  const { isAuthenticated, isLoading, logout, user } = useAuth0()

  console.log('isAuthenticated', isAuthenticated)
  console.log('isLoading', isLoading)
  console.log('user', user)

  const isUser = isAuthenticated && user

  return (
    <Wrapper>
      <Content>
        <UserInfo>
          {isUser && <Avatar src={user.picture} alt={user.name} />}
          {isUser && <UserName>{user?.name}</UserName>}
        </UserInfo>
        <Button
          onClick={() =>
            logout({ returnTo: `${window.location.origin}/login` })
          }
        >
          Log out
        </Button>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 1rem 0;
  background: var(--color-white);
  border-radius: var(--radius);
`
const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`
const UserName = styled.h3`
  font-size: 1rem;
  margin-bottom: 0;
`
