import React, { useContext } from 'react'
import styled from 'styled-components'
import Icon from '../../components/Icon'
import AppContext from '../../AppContext'

const Container = styled.div`
  font-size: 0.45em;
  > div > div {
    display: flex;
    align-items: center;
  }
  svg {
    width: 0.75em;
    height: 0.75em;
  }
  h5 {
    color: ${props => props.accentColor};
    text-transform: uppercase;
    font-size: 1.5em;
  }
  h6 {
    color: #333;
    margin-left: 5px;
    font-size: 1.25em;
    text-transform: uppercase;
  }
`

const SingleLineHeading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const MultiLineHeading = styled.div`
  h6 {
    margin-left: 0;
  }
`

const ExperienceHeading = props => {
  const { title, company, location, multiLine = false } = props
  const {
    colors: { accentColor }
  } = useContext(AppContext)

  return (
    <Container accentColor={accentColor}>
      <SingleLineHeading>
        <div>
          <h5>{title}</h5>
          {!multiLine && <h6> - {company}</h6>}
        </div>
        <div>
          <Icon icon="location" />
          <div>{location}</div>
        </div>
      </SingleLineHeading>
      <MultiLineHeading>{multiLine && <h6>{company}</h6>}</MultiLineHeading>
    </Container>
  )
}

export default ExperienceHeading
