import { ReactNode } from 'react';
import styled from 'styled-components';

interface NavButtonProps { 
  children: ReactNode;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}

const NavButton = ({ 
  children, 
  fontSize,
  fontWeight,
  textAlign,
  onClick
} : NavButtonProps) => {
  return (
    <Wrapper
    onClick={onClick}
    style={{
      fontSize,
      fontWeight,
      textAlign
    }}>
      { children }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.darkgrey};
  text-align: center;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.red};
  }
`

export default NavButton;