import React  from 'react';
import styled from 'styled-components';
import BodyBox from 'theme/Default/BodyBox'
import TitleText from 'theme/Default/TitleText'
import SkillsItem from './SkillsItem';

const Skills = () => {
  return (
    <BodyBox id="skills" backgroundColor="#81B622">
      <TitleText color="white">SKILLS</TitleText>
      <List>
        <SkillsItem type="Frontend" />
        <SkillsItem type="Backend" />
        <SkillsItem type="Etc" />
      </List>
    </BodyBox>
  )
}

const List = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  width: 90vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items:center;
  }
`

export default Skills