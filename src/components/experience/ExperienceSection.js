import React from 'react'
import styled from 'styled-components'

const Heading = styled.div`
  color: rgb(121, 73, 17);
  font-size: 0.65rem;
`

const Paragraph = styled.p`
  font-size: 0.65rem;
  margin-bottom: 5px;
`

const ExperienceSection = props => {
  const { section } = props
  const { heading, body } = section

  return (
    <div>
      {heading && <Heading>{heading}</Heading>}
      {body.map((paragraph, index) => (
        <Paragraph key={index}>{paragraph}</Paragraph>
      ))}
    </div>
  )
}

export default ExperienceSection
