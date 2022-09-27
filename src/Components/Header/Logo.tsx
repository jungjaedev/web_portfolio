import React from 'react';
import styled from 'styled-components';
import Box from 'theme/Default/Box';
import NavButton from 'theme/Default/NavButton';

const Logo = () => {
  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Box>
      <NavButton textAlign="left" onClick={handleClickToTop} fontWeight="700" fontSize="2.5rem">
        <TitleText>Jaewon Jung</TitleText>
      </NavButton>
    </Box>
  )
}

const TitleText = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

export default Logo