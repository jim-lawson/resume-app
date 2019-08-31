import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../AppContext'
import ContactInfo from './ContactInfo'

const Container = styled.footer`
  height: 3em;
  font-size: 0.65em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.backgroundColor};
`

const Footer = () => {
  const { colors } = useContext(AppContext)
  return (
    <Container backgroundColor={colors.backgroundColor}>
      <ContactInfo
        icon="home"
        text="6238 NE 195th Street · Kenmore, WA 98028"
      />
    </Container>
  )
}

export default Footer
