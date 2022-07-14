import styled from 'styled-components'

export const Empty = () => {
  return (
    <Wrapper>
      <Title>Welcome to Github Users!</Title>
      <Subtitle>Please search for a user to see results.</Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background: var(--color-white);
  padding: 2rem;
  border-radius: var(--radius);
`
const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  text-transform: none;
`
const Subtitle = styled.h2`
  font-size: 1.2rem;
  color: var(--color-grey-5);
  text-transform: none;
`
