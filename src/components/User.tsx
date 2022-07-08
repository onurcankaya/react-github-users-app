import styled from 'styled-components'

import { Card } from './Card'
import { Followers } from './Followers'

export const User = (): JSX.Element => {
  return (
    <Wrapper>
      <Card />
      <Followers />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
