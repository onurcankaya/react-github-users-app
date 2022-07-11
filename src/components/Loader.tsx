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
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Spinner = styled.img`
  width: 200px;
  height: 200px;
`
