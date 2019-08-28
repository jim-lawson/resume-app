import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  white-space: nowrap;
  div:first-child {
    margin-right: 5px;
  }
`

const ContactInfo = props => {
  const { icon, text } = props
  return (
    <Container>
      <div>
        <Icon icon={icon} />
      </div>
      <div>{text}</div>
    </Container>
  )
}

export default ContactInfo
