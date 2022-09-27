import React from 'react'
import styled from 'styled-components';
import { archivingList } from 'content/archiving';
import ItemBox from '../../theme/Default/ItemBox';
import { typeProps } from '../../types/common';

const ArchivingItem = ({type} : typeProps) => {
  const DescriptionList = archivingList[type].description.map((item, idx) => {
    return <Description key={idx}>◆ {item}</Description>
  })

  const handleClick = () => {
    window.open(`${archivingList[type].linkTo}`)
  }

  return (
    <Wrapper margin='1rem' onClick={handleClick}>
      <Subject>
        <SubjectImage src={archivingList[type].image} />
        <SubjectText>{archivingList[type].title}</SubjectText>
      </Subject>
      <Link>{archivingList[type].link}</Link>
      <Descriptions>
        {DescriptionList}
      </Descriptions>
    </Wrapper>
  )
}

const Wrapper = styled(ItemBox)`
`

const Subject = styled.div`
  display: flex;
  align-items:center;
  margin: 1.5rem 0;
  height: 3rem;

  @media screen and (max-width: 768px) {
    margin: 1.5vw 0;
  }
`

const SubjectImage = styled.img`
  width: 3rem;
  margin-right: 1rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 7vw;
    height: 7vw;
    margin-right: 2vw;
  }
`

const SubjectText = styled.div`
  font-size: 3rem;
  margin: auto 0;
  line-height: 3rem;
  height: 100%;
  vertical-align: bottom;
  padding-top: 3px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

const Link = styled.span`
  color: ${({ theme }) => theme.blue};

  ${Wrapper}:hover & {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const Descriptions = styled.div`
  margin: 1.5rem 0;
`

const Description = styled.div`
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin: 2vw 0;
  }
`

export default ArchivingItem