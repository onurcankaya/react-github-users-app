import styled from 'styled-components'

import githubImg from '../assets/images/github.svg'

export const Login = (): JSX.Element => {
  return (
    <Wrapper>
      <Image src={githubImg} alt='github-login' />
      <h2>Github Users</h2>
      <button className='btn'>Login</button>
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
  h2 {
    margin-bottom: 3rem;
  }
`
const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 2rem;
`
