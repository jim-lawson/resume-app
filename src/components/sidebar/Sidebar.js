import React from 'react'
import styled from 'styled-components'
import SidebarSection from './SidebarSection'

const Container = styled.div`
  width: ${props => props.width}px;
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
