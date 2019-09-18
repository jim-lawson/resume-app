import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SidebarSection from './SidebarSection'

const Container = styled.div`
  width: 200px;
`

const Sidebar = props => {
  const { data, width } = props

  return (
    <Container width={width}>
      {data.sections.map((section, sectionIdx) => (
        <SidebarSection key={sectionIdx} section={section} />
      ))}
    </Container>
  )
}

export default Sidebar

Sidebar.propTypes = PropTypes.shape({
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}).isRequired
