import { ReactNode, RefObject } from 'react';
import styled from 'styled-components';

interface BoxProps { 
  children: ReactNode;
  width?: string;
  height?: string;
  maxWidth?: string;
  justifyContent?: string;
  flexDirection?: 'row' | 'column';
  margin?: string;
  alignItems?: string;
  backgroundColor?: string;
  padding?: string;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
  top?: string;
  boxShadow?: string;
  zIndex?: string;
  id?: string;
  ref?: RefObject<HTMLImageElement>;
}

const Box = ({ 
  children, 
  width, 
  height, 
  maxWidth, 
  justifyContent, 
  flexDirection,
  margin,
  alignItems,
  backgroundColor,
  padding,
  position,
  top,
  boxShadow,
  zIndex,
  id,
  ref,
} : BoxProps) => {
  return (
    <Wrapper 
    id={id}
    ref={ref}
    style={{
      width, 
      height, 
      maxWidth, 
      justifyContent, 
      flexDirection,
      margin,
      alignItems,
      backgroundColor,
      padding,
      position,
      top,
      boxShadow,
      zIndex
    }}>
      { children }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 'auto';
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

export default Box;