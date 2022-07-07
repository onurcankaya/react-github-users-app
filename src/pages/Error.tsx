import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Layout } from '../components'

export const Error = (): JSX.Element => {
  return (
    <Layout>
      <Wrapper>
        <Header>404</Header>
        <Subheader>Page Not Found</Subheader>
        <Link to='/' className='btn'>
          Go back
        </Link>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Header = styled.h1`
  font-size: 10rem;
  margin-bottom: 2rem;
`
const Subheader = styled.h3`
  font-size: 3rem;
  margin-bottom: 4rem;
`
