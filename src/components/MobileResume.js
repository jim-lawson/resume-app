import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../AppContext'
import { singlePageData, timelineData, skillsData } from '../data/data'
import Experience from './experience/Experience'
import Timeline from './Timeline'
import Skills from './Skills'
import Footer from './Footer'
import Header from './Header'
import Education from './Education'
import Heading from './Heading'
import SidebarSection from './sidebar/SidebarSection'

const Container = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 0 15px;
`

const Article = styled.article`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 5px solid ${props => props.backgroundColor};
`

const AsideRow = styled.div`
  display: flex;
  div:nth-child(3) {
    width: 175px;
  }
`

const WidgetContainer = styled.div`
  margin: 0 25px 25px 25px;
`
const TimelineContainer = styled.div`
  margin: 0 10px 15px 15px;
`

const SkillsContainer = styled.div`
  margin: 10px 10px 10px 15px;
`

const EducationContainer = styled.div`
  margin-left: 15px;
`

const sidebarSectionPairs = singlePageData.main.sidebar.sections.reduce(
  (collector, section, index) => {
    if (index % 2 === 0) {
      collector.push([section])
    } else {
      collector[parseInt(index / 2)].push(section)
    }
    return collector
  },
  []
)

const MobileResume = () => {
  const { colors } = useContext(AppContext)

  return (
    <Container>
      <Header size="mobile" />
      <Main>
        <Article backgroundColor={colors.backgroundColor}>
          <Experience
            data={singlePageData.main.article.experience}
            multiLineHeading={true}
          />
        </Article>
        <aside>
          {sidebarSectionPairs.map(pair => (
            <AsideRow>
              <SidebarSection section={pair[0]} />
              {pair[1] && <SidebarSection section={pair[1]} />}
            </AsideRow>
          ))}
        </aside>
      </Main>
      <WidgetContainer>
        <Heading icon="timeline">Timeline</Heading>
        <TimelineContainer>
          <Timeline data={timelineData} />
        </TimelineContainer>
        <Heading icon="skills">Professional Skills</Heading>
        <SkillsContainer>
          <Skills data={skillsData} columns={2} />
        </SkillsContainer>
        <Heading icon="education">Education</Heading>
        <EducationContainer>
          <Education />
        </EducationContainer>
      </WidgetContainer>
      <Footer />
    </Container>
  )
}

export default MobileResume
