import React from 'react'
import styled from 'styled-components'
import DesktopResume from './DesktopResume'
import { singlePageData } from '../data/data'

const Container = styled.div`
  font-size: 20px;
`

const SinglePageDesktopResume = props => {
  return (
    <Container>
      <DesktopResume page={singlePageData} showPrintLink={true} />
    </Container>
  )
}

export default SinglePageDesktopResume
