import React from 'react'
import styled from 'styled-components'
import Icon from '../../components/Icon'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  > div {
    display: flex;
    align-items: center;
  }
  svg {
    width: 0.75em;
    height: 0.75em;
  }
`

const ExperienceHeading = props => {
  const { title, company, location } = props
  return (
    <Container>
      <div>
        <h5>{title}</h5>
        <h6> - {company}</h6>
      </div>
      <div>
        <Icon icon="location" />
        <div>{location}</div>
      </div>
    </Container>
  )
}

export default ExperienceHeading
