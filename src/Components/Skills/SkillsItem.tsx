import React from 'react'
import { skillsList } from 'content/skills';
import ItemBox from 'theme/Default/ItemBox';
import styled from 'styled-components';
import TitleText from 'theme/Default/TitleText';
import { typeProps } from '../../types/common';

const SkillsItem = ({type} : typeProps) => {
  const images = skillsList[type].imageList
  const skillsImageList = images.map((item, idx)=> {
    return <Image key={idx} src={item} />
  })
  return (
    <ItemBox margin="1rem" width="20rem" padding="3rem 2rem">
      <TitleText textAlign="center" marginBottom="1rem" fontSize='2rem' color="#E50D06">{type}</TitleText>
      {skillsImageList}
    </ItemBox>
  )
}

const Image = styled.img`
  max-width: 100%;
  max-height: 8rem;
`

export default SkillsItem