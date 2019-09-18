import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ExperienceDates from './ExperienceDates'
import ExperienceHeading from './ExperienceHeading'
import ExperienceSections from './ExperienceSections'
import Heading from '../Heading'

const ListContainer = styled.div`
  ul {
    position: relative;
    margin-left: 10px;
  }
  li {
    list-style: none;
    font-size: 1.5em;
    padding-bottom: 0.5em;
  }
`

const Experience = props => {
  const { data, hasMultiLineHeading = false } = props

  return (
    <div>
      <Heading icon="work">Work Experience</Heading>

      <ListContainer>
        {data.map(experience => {
          const {
            title,
            company,
            location,
            startDate,
            endDate,
            sections
          } = experience
          return (
            <ul key={experience.id}>
              <li>
                <ExperienceHeading
                  title={title}
                  company={company}
                  location={location}
                  isMultiLine={hasMultiLineHeading}
                />
                <ExperienceDates startDate={startDate} endDate={endDate} />
                <ExperienceSections sections={sections} />
              </li>
            </ul>
          )
        })}
      </ListContainer>
    </div>
  )
}

export default Experience

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMultiLineHeading: PropTypes.bool
}
