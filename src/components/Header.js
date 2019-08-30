import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AppContext from '../AppContext'
import ContactInfo from './ContactInfo'
import Image from './Image'
import Icon from './Icon'

const Container = styled.header`
  height: ${props => (props.size === 'large' ? '80px' : '40px')};
  padding: 25px;
  display: flex;
  align-items: center;
  background: ${props => props.backgroundColor};
  justify-content: space-between;
`

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: ${props => (props.size === 'large' ? '3.0em' : '1.75em')};
    text-transform: uppercase;
    color: ${props => props.accentColor};
    font-weight: 900;
    margin-top: -0.2em;
  }
  h2 {
    font-size: ${props => (props.size === 'large' ? '2em' : '1.25em')};
    text-transform: uppercase;
    font-style: italic;
    color: #000;
    font-weight: 900;
    margin-top: -0.25em;
  }
  h3 {
    font-size: ${props => (props.size === 'large' ? '1em' : '0.75em')};
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: #333;
    white-space: nowrap;
    margin-top: 0.25em;
  }
`

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.size === 'large' ? 'column' : 'row')};
  font-size: ${props => (props.size === 'large' ? '0.75em' : '0.65em')};
`

const ContactContainer = styled.div`
  margin-left: ${props => (props.size === 'large' ? '0' : '1.5em')};
`

const PrintableContainer = styled.div`
  margin-top: 10px;
  font-size: 1em;
  a {
    display: flex;
    align-items: center;
    color: #666;
    text-decoration: none;
  }
  div {
    margin-left: 5px;
  }
`

const Header = props => {
  const { size, showPrintLink } = props
  const { colors } = useContext(AppContext)

  return (
    <Container size={size} backgroundColor={colors.backgroundColor}>
      <PersonalInfo size={size} accentColor={colors.accentColor}>
        <h1>Jim</h1>
        <h2>Lawson</h2>
        <h3>Senior UI Engineer</h3>
      </PersonalInfo>
      <ContactsContainer size={size}>
        <ContactContainer size={size}>
          <ContactInfo icon="email" text="jim-lawson@comcast.net"></ContactInfo>
        </ContactContainer>
        <ContactContainer size={size}>
          <ContactInfo icon="phone" text="+1 206-856-5464"></ContactInfo>
        </ContactContainer>
        {showPrintLink && (
          <PrintableContainer>
            <Link to="/printable" target="_blank" rel="noopener noreferrer">
              <Icon icon="print" />
              <div>Printable Format</div>
            </Link>
          </PrintableContainer>
        )}
      </ContactsContainer>
      {size === 'large' && (
        <Image
          image="jim"
          alt="Jim Lawson"
          shadow={true}
          width={159}
          height={94}
        />
      )}
    </Container>
  )
}

export default Header
