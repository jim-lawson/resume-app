import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-row-gap: 10px;
`

const SkillBar = styled.div`
  display: flex;
  > div {
    font-size: 0.75rem;
    min-width: 6em;
    margin-right: 10px;
    color: #555;
  }
`

const SkillMeter = styled.div`
  border-radius: 2px;
  height: 10px;
  background-image: linear-gradient(#aaa, #ddd, #aaa, #aaa);
  div {
    width: ${props => props.percentage}%;
    height: 100%;
    background-image: linear-gradient(
      rgb(2, 130, 174),
      #ddd,
      rgb(2, 130, 174),
      rgb(2, 130, 174)
    );
    border-radius: 5px 0 0 5px;
  }
`

const Skills = props => {
  const { data, columns } = props

  let columnsArr = []
  for (let i = 0; i < columns; i++) {
    columnsArr.push('1fr')
  }

  return (
    <Container columns={columnsArr.join(' ')}>
      {data.map(skill => (
        <SkillBar key={skill.name}>
          <div>{skill.name}</div>
          <SkillMeter percentage={skill.percentage}>
            <div />
          </SkillMeter>
        </SkillBar>
      ))}
    </Container>
  )
}

export default Skills

Skills.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired
    })
  ).isRequired,
  columns: PropTypes.number.isRequired
}
