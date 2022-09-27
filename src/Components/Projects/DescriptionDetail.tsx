import React from 'react'
import styled from 'styled-components';

interface ChildProps {
  type: string;
  content?: string;
  onClick?: () => void;
}

const DescriptionDetail = ({type, content} : ChildProps) => {
  const handleClick = () => {
    if(type === "URL" || type === "Github" ){
      window.open(content);
    }
  }

  return (
    <Wrapper>
      <DetailTitle>✔️ {type}</DetailTitle>
      <DetailContent onClick={handleClick} type={type}>{content}</DetailContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  font-weight: 400;
`

const DetailTitle = styled.div`
  width: 33%;
  font-weight: 800;
`

const DetailContent = styled.div<ChildProps>`
  width: 67%;
  word-break: break-all;
  
  color: ${({ type }) => type === "URL" || type === "Github" ? "blue" : null};
  cursor: ${({ type }) => type === "URL" || type === "Github" ? "pointer" : null};
`

export default DescriptionDetail