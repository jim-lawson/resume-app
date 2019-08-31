import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import { singlePageData } from '../data/data'

const Container = styled.div`
  font-size: 20px;
`

const Resume = props => {
  return (
    <Container>
      <Page page={singlePageData} showPrintLink={true} />
    </Container>
  )
}

export default Resume
