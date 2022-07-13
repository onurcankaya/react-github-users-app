import styled from 'styled-components'

import { LinkButton } from '../components'

export const NotFound = (): JSX.Element => {
  return (
    <Wrapper>
      <Header>404</Header>
      <Subheader>Page Not Found</Subheader>
      <LinkButton to='/'>Go back</LinkButton>
    </Wrapper>
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
