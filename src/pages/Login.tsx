import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

import githubImg from '../assets/images/github.svg'
import { Button, Layout } from '../components'

export const Login = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Layout>
      <Wrapper>
        <Image src={githubImg} alt='github-login' />
        <Title>Github Users</Title>
        <Button onClick={() => loginWithRedirect()}>Login / Sign Up</Button>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
`
const Title = styled.h2`
  margin-bottom: 2rem;
`
