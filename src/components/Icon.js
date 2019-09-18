import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AboutMeIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import CodeIcon from '@material-ui/icons/Code'
import EducationIcon from '@material-ui/icons/School'
import EmailIcon from '@material-ui/icons/Email'
import HomeIcon from '@material-ui/icons/Home'
import InterestsIcon from '@material-ui/icons/Videocam'
import LocationIcon from '@material-ui/icons/Room'
import PhoneIcon from '@material-ui/icons/Phone'
import PrintIcon from '@material-ui/icons/Print'
import SkillsIcon from '@material-ui/icons/Build'
import SocialIcon from '@material-ui/icons/AlternateEmail'
import TimelineIcon from '@material-ui/icons/Timeline'
import WhatsCookinIcon from '@material-ui/icons/Whatshot'
import WorkIcon from '@material-ui/icons/Work'

const IconContainer = styled.span`
  color: #666;
`

const icons = {
  aboutMe: <AboutMeIcon />,
  code: <CodeIcon />,
  education: <EducationIcon />,
  email: <EmailIcon />,
  home: <HomeIcon />,
  interests: <InterestsIcon />,
  location: <LocationIcon />,
  phone: <PhoneIcon />,
  print: <PrintIcon />,
  skills: <SkillsIcon />,
  social: <SocialIcon />,
  timeline: <TimelineIcon />,
  whatsCookin: <WhatsCookinIcon />,
  work: <WorkIcon />
}

const Icon = props => {
  const { icon } = props
  if (icons[icon]) {
    return <IconContainer>{icons[icon]}</IconContainer>
  } else {
    console.log('Unknown icon specified')
    return <div />
  }
}

export default Icon

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}
