import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.div`
  color: rgb(121, 73, 17);
  font-size: 0.45em;
  margin-bottom: 1px;
`

const Paragraph = styled.p`
  font-size: 0.435em;
  margin-bottom: 3px;
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

ExperienceSection.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}
