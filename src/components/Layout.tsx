import React from 'react'
import styled from 'styled-components'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  padding: 1rem 0;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`
