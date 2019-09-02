import React from 'react'
import styled from 'styled-components'
import DesktopResume from './DesktopResume'
import { singlePageData } from '../data/data'

const Container = styled.div`
  zoom: 1.35;
`

const SinglePageDesktopResume = props => {
  return (
    <Container>
      <DesktopResume
        page={singlePageData}
        showPrintLink={true}
        verticalMargins={true}
      />
    </Container>
  )
}

export default SinglePageDesktopResume
