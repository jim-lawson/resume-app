import React from 'react'
import Page from './Page'
import { multiPageData } from '../data/data'

const PaginatedResume = () => {
  return (
    <div>
      {multiPageData.pages.map((page, index) => (
        <Page
          key={index}
          page={page}
          showPrintLink={false}
          constrainHeight={true}
        />
      ))}
    </div>
  )
}

export default PaginatedResume
