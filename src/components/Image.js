import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import jim from '../images/jim-cropped-color.png'
import twitterImg from '../images/twitter.png'
import facebookImg from '../images/facebook.png'
import linkedInImg from '../images/linkedin.png'
import githubImg from '../images/github.gif'
import dockerImg from '../images/docker.png'
import whatsCookinImg from '../images/react-native-app.png'

const shadow = `
  box-shadow: -5px 5px 5px #666;
  /* the following are needed to preservice the box shadow when printing to PDF */
  -webkit-print-color-adjust: exact;
  -webkit-filter: opacity(1);
`

const roundedCorners = `
  img {
    border-radius: 15px;
  }
`

const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  ${props => props.hasShadow && shadow}
  ${props => props.hasRoundedCorners && roundedCorners}
  margin: ${props => (props.hasVerticalMargins ? '10px 15px 10px' : '5px')} 0;
  a {
    display: flex;
    align-items: center;
    color: #555;
    text-decoration: none;
  }
`

const Image = props => {
  const {
    image,
    width,
    height,
    alt,
    label,
    href,
    hasShadow,
    hasRoundedCorners,
    hasVerticalMargins
  } = props
  let src
  switch (image) {
    case 'jim':
      src = jim
      break
    case 'twitter':
      src = twitterImg
      break
    case 'facebook':
      src = facebookImg
      break
    case 'linkedIn':
      src = linkedInImg
      break
    case 'github':
      src = githubImg
      break
    case 'docker':
      src = dockerImg
      break
    case 'whatsCookin':
      src = whatsCookinImg
      break
    default:
      console.error('Unknown image specified')
      return <div />
  }
  const img = <img src={src} alt={alt} style={{ width, height }} />
  const contents = label ? (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>{img}</div>
      <div style={{ whiteSpace: 'nowrap', marginLeft: '5px' }}>{label}</div>
    </div>
  ) : (
    img
  )
  return (
    <Container
      width={width}
      height={height}
      hasShadow={hasShadow}
      hasRoundedCorners={hasRoundedCorners}
      hasVerticalMargins={hasVerticalMargins}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {contents}
        </a>
      ) : (
        contents
      )}
    </Container>
  )
}

export default Image

Image.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string,
  href: PropTypes.string,
  hasShadow: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  hasVerticalMargins: PropTypes.bool
}
