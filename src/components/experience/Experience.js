import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../AppContext'
import ExperienceDates from './ExperienceDates'
import ExperienceHeading from './ExperienceHeading'
import ExperienceSections from './ExperienceSections'
import Heading from '../Heading'

const ListContainer = styled.div`
  ul {
    position: relative;
    margin-left: 28px;
  }
  ul::before {
    position: absolute;
    left: 0px;
    top: 16px;
    margin-left: -17px;
    content: '';
    background: #ddd;
    width: 1px;
    height: calc(100% - 15px);
  }
  li {
    font-size: 1.5em;
    padding-bottom: 0.5em;
  }
  h5 {
    color: ${props => props.accentColor};
    text-transform: uppercase;
    font-size: 1.5em;
  }
  h6 {
    color: #333;
    margin-left: 5px;
    font-size: 1.5em;
    text-transform: uppercase;
  }
`

const Experience = props => {
  const { data } = props
  const { colors } = useContext(AppContext)

  return (
    <div>
      <Heading icon="work">Work Experience</Heading>

      <ListContainer accentColor={colors.accentColor}>
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
