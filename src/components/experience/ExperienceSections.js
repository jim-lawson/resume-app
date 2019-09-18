import React from 'react'
import PropTypes from 'prop-types'
import ExperienceSection from './ExperienceSection'

const ExperienceSections = props => {
  const { sections } = props
  return sections.map((section, index) => (
    <ExperienceSection key={index} section={section} />
  ))
}

export default ExperienceSections

ExperienceSections.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    )
  })
).isRequired
