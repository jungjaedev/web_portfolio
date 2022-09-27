import React from 'react'
import styled from 'styled-components';
import BodyBox from 'theme/Default/BodyBox'
import TitleText from 'theme/Default/TitleText'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <BodyBox id="projects" backgroundColor="#5D95BB">
      <TitleText color="white">PROJECTS</TitleText>
      <List>
        <ProjectItem type="Portfolio" />
        <ProjectItem type="TodayNews" />
        <ProjectItem type="Emotipop" />
      </List>
    </BodyBox>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
`

export default Projects;