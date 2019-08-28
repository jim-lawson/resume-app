import React from 'react'
import styled from 'styled-components'
import Heading from '../components/Heading'
import Image from '../components/Image'

const Container = styled.div``

const Section = styled.section`
  margin-bottom: 15px;
`

const ImagesContainer = styled.div`
  margin-left: 10px;
  font-size: 0.65em;
`

const BodyContainer = styled.div`
  margin-left: 10px;
  p {
    font-size: 0.65rem;
    margin-bottom: 5px;
  }
`

const Sidebar = props => {
  const { data } = props

  return (
    <Container>
      {data.sections.map((section, sectionIdx) => {
        const { icon, title, intro, images, body } = section
        return (
          <Section key={sectionIdx}>
            <Heading icon={icon}>{title}</Heading>
            {intro && (
              <BodyContainer>
                {intro.map((paragraph, paraIdx) => (
                  <p key={paraIdx}>{paragraph}</p>
                ))}
              </BodyContainer>
            )}
            {images && (
              <ImagesContainer>
                {images.map((img, imgIdx) => (
                  <Image key={imgIdx} {...img} />
                ))}
              </ImagesContainer>
            )}
            {body && (
              <BodyContainer>
                {body.map((paragraph, paraIdx) => (
                  <p key={paraIdx}>{paragraph}</p>
                ))}
              </BodyContainer>
            )}
          </Section>
        )
      })}
    </Container>
  )
}

export default Sidebar
