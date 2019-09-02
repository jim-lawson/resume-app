import React from 'react'
import styled from 'styled-components'
import DesktopResume from './DesktopResume'
import { singlePageData } from '../data/data'

const Container = styled.div`
  font-size: 24px;
`

const SinglePageDesktopResume = props => {
  return (
    <Container>
      <DesktopResume
        page={singlePageData}
        showPrintLink={true}
        width="1024px"
        height="auto"
        sidebarWidth={300}
      />
    </Container>
  )
}

export default SinglePageDesktopResume
