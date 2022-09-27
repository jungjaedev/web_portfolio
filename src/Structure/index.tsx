import React from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Box from 'theme/Default/Box';

const Structure = () => {

  return (
    <Box alignItems="center" flexDirection="column" justifyContent="center" margin="0 auto">
      <Header />
      <Body />
      <Footer />
    </Box>
  )
}

export default Structure