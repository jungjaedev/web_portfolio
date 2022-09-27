import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Box from 'theme/Default/Box';
import NavButton from 'theme/Default/NavButton';
import { useSetRecoilState } from "recoil";
import { scrollAtom } from 'state/seletedComponent';
import { GrContact } from 'react-icons/gr';
import { AiOutlineFundProjectionScreen, AiOutlineTool } from 'react-icons/ai';
import { FiArchive } from 'react-icons/fi';

const NavButtons = () => {
  const setScroll = useSetRecoilState(scrollAtom);
  const [ windowWidth, setWindowWidth ] = useState(getWindowDimension())

  function getWindowDimension() {
    const { innerWidth } = window;
    return innerWidth;
  }

  const handleNavButton = (type: string) => {
    setScroll(type)
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimension());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Box justifyContent="space-between">
      <ButtonWrapper>
        <Link to="archiving" smooth={true} offset={-95}>
          <NavButton onClick={()=>handleNavButton("archiving")}>
            {windowWidth > 768 ? "ARCHIVING" : <FiArchive />}
          </NavButton>
        </Link>
        <Link to="skills" smooth={true} offset={-95}>
          <NavButton onClick={()=>handleNavButton("skills")}>
            {windowWidth > 768 ? "SKILLS" : <AiOutlineTool />}
          </NavButton>
        </Link>
        <Link to="projects" smooth={true} offset={-95}>
          <NavButton onClick={()=>handleNavButton("projects")}>
            {windowWidth > 768 ? "PROJECTS" : <AiOutlineFundProjectionScreen />}
          </NavButton>
        </Link>
        <Link to="contact" smooth={true} offset={-95}>
          <NavButton onClick={()=>handleNavButton("contact")}>
            {windowWidth > 768 ? "CONTACT" : <GrContact />}
          </NavButton>
        </Link>
      </ButtonWrapper>
    </Box>
  )
}

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default NavButtons;