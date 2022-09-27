import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { projectsList } from 'content/projects';
import { ProjectsListProps } from 'content/projects';

interface ChildProps {
  currentProject: ProjectsListProps;
}

const ProjectImageSlider = ({currentProject}: ChildProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const slideRef = useRef<any>(null);
  const imageNum = projectsList[currentProject.title].imageList.length;
  
  const nextSlide = () => {
    if (currentImage >= imageNum - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  const preSlide = () => {
    if (currentImage === 0) {
      setCurrentImage(imageNum - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  useEffect(() => {
    if(slideRef.current) {
      slideRef.current.style.transition = "all 200ms ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentImage}00%)`
    }
  },[currentImage])

  const images = projectsList[currentProject.title].imageList.map((item, idx) => {
    return <Image src={item} key={idx} />
  })
  
  return (
    <Wrapper>
      <ImageSlider ref={slideRef}>
        {images}
      </ImageSlider>
      <Buttons>
        <Button src={require('assets/icons/left-arrow.png')} onClick={preSlide} />
        {currentImage + 1}/{imageNum}
        <Button src={require('assets/icons/right-arrow.png')} onClick={nextSlide} />
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  overflow: hidden;
  margin: 2vw 2rem 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 1rem 2rem 0;
  }
`

const Image = styled.img`
  width: 100%;
`

const ImageSlider = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.img`
  width: 0.8rem;
  height: 100%;
  margin: 2rem 1vw;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 1vw;
  }
`



export default ProjectImageSlider