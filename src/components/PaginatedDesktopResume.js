import React from 'react'
import DesktopResume from './DesktopResume'
import { multiPageData } from '../data/data'

const PaginatedDesktopResume = () => {
  return (
    <div>
      {multiPageData.pages.map((page, index) => (
        <DesktopResume
          key={index}
          page={page}
          showPrintLink={false}
          constrainHeight={true}
        />
      ))}
    </div>
  )
}

export default PaginatedDesktopResume
