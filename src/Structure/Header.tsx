import React from 'react';
import Box from 'theme/Default/Box';
import Navbar from 'Components/Header/Navbar';

const Header = () => {
  return (
    <Box zIndex="1" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" backgroundColor="white" position="sticky" top='0' justifyContent="center" padding="1.5rem 0">
      <Navbar />
    </Box>
  )
}


export default Header