import React from 'react'
import styled from 'styled-components';
import { projectsList } from 'content/projects';
import ProjectImageSlider from './ProjectImageSlider';
import ProjcetDescriptions from './ProjcetDescriptions';
import { typeProps } from '../../types/common';

const ProjectItem = ({type}: typeProps) => {
  const currentProject = projectsList[type]
  return (
    <Item>
      <ProjectHeader>
        <Title>{currentProject.title}</Title>
        <Date>{currentProject.date}</Date>
      </ProjectHeader>
      <ProjcetContent>
        <ProjectImageSlider currentProject={currentProject} />
        <ProjcetDescriptions currentProject={currentProject} />
      </ProjcetContent>
    </Item>
  )
}

const ProjcetContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items:center;
    justify-content: center;
    font-size: 1.1rem;
    word-break: break-word;
    overflow: inherit;
    width: 100%;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const Title = styled.div`
  font-size: 2.7rem;
  font-weight: 900;
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
  }
`

const Date = styled.div`
  color: ${({ theme }) => theme.grey};

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

const Item = styled.div`
  max-width: 1200px;
  width: 90vw;
  padding: 1rem 2rem;
  margin: 1rem auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: white;
  font-size: 1.3rem;
  font-weight: 500;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export default ProjectItem