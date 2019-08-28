import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Container = styled.div`
  display: flex;
  align-items: center;
  h4 {
    color: #333;
    margin: 0 0.25em;
    text-transform: uppercase;
    font-size: 1rem;
  }
  div {
    margin-top: 3px;
  }
`

const Heading = props => {
  const { icon, children } = props
  return (
    <Container>
      <div>
        <Icon icon={icon} />
      </div>
      <h4>{children}</h4>
    </Container>
  )
}

export default Heading
