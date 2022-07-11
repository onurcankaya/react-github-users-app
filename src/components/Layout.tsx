import React from 'react'
import styled from 'styled-components'

export const Layout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  padding: 7rem 0 4rem 0;
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`
