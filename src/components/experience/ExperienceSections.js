import React from 'react'
import ExperienceSection from './ExperienceSection'

const ExperienceSections = props => {
  const { sections } = props
  return sections.map((section, index) => (
    <ExperienceSection key={index} section={section} />
  ))
}

export default ExperienceSections
