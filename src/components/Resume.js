import React from 'react'
import Page from './Page'
import { singlePageData } from '../data/data'

const Resume = props => {
  return (
    <div>
      <Page page={singlePageData} showPrintLink={true} />
    </div>
  )
}

export default Resume
