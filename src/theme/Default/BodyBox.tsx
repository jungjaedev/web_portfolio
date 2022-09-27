import { ReactNode, RefObject } from 'react';
import Box from './Box';

interface BodyBoxProps { 
  children: ReactNode;
  backgroundColor?: string;
  width?: string;
  id?:string;
  ref?: RefObject<HTMLImageElement>;
}

const BodyBox = ({children, backgroundColor, ref, id, width} : BodyBoxProps) => {
  return (
    <Box     
    ref={ref}
    padding="4rem 0" 
    flexDirection="column" 
    justifyContent='center' 
    alignItems="center"
    backgroundColor={backgroundColor}
    width={width}
    id={id}
    >{children}</Box>
  )
}


export default BodyBox