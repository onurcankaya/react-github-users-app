import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const sharedStyles = css`
  border-radius: var(--radius);
  border-color: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  background: var(--color-grey-5);
  color: var(--color-white);
  transition: var(--transition);
  cursor: pointer;
  font-size: 0.85rem;
  &:hover {
    background: var(--color-grey-6);
  }
`
export const Button = styled.button`
  ${sharedStyles}
`
export const ExternalLinkButton = styled.a`
  ${sharedStyles}
`
export const LinkButton = styled(Link)`
  ${sharedStyles}
`
