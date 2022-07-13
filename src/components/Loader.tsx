import styled from 'styled-components'

import spinner from '../assets/images/spinner.svg'

export const Loader = () => {
  return (
    <Wrapper>
      <Spinner src={spinner} alt='spinner' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Spinner = styled.img`
  width: 100px;
  height: 100px;
`
