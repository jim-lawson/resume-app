import React from 'react'
import SidebarSection from './SidebarSection'

const Sidebar = props => {
  const { data } = props

  return (
    <div>
      {data.sections.map((section, sectionIdx) => (
        <SidebarSection key={sectionIdx} section={section} />
      ))}
    </div>
  )
}

export default Sidebar
