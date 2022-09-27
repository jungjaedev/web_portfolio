import React from 'react'
import Box from 'theme/Default/Box'
import Icons from './Icons'
import Copyright from './Copyright';

const Contact = () => {
  return (
    <Box id="contact" height="8rem" flexDirection='column' justifyContent="center" alignItems="center">
      <Icons />
      <Copyright />
    </Box>
  )
}


export default Contact