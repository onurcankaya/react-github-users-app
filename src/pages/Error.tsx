import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Error = (): JSX.Element => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Link to='/' className='btn'>
        Go back
      </Link>
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
  h1 {
    font-size: 10rem;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }
`
