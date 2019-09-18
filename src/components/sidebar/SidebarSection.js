import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Heading from '../Heading'
import Image from '../Image'

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
    font-size: 0.65em;
    margin-bottom: 5px;
  }
`

const SidebarSection = props => {
  const { icon, title, intro, images, body } = props.section
  return (
    <Section>
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
}

export default SidebarSection

SidebarSection.propTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  intro: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      hasRoundedCorners: PropTypes.bool,
      hasVerticalMargins: PropTypes.bool
    })
  ),
  body: PropTypes.arrayOf(PropTypes.string).isRequired
}).isRequired
