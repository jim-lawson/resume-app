import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Container = styled.div`
  a {
    text-decoration: none;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  white-space: nowrap;
  div:first-child {
    margin-right: 5px;
  }
`

const ContactInfo = props => {
  const { icon, text, href } = props
  const contents = (
    <Info>
      <div>
        <Icon icon={icon} />
      </div>
      <div>{text}</div>
    </Info>
  )

  return (
    <Container>{href ? <a href={href}>{contents}</a> : contents}</Container>
  )
}

export default ContactInfo
