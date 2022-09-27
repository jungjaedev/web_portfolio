import { ReactNode } from 'react';
import styled from 'styled-components';

interface ItemBoxProps { 
  children: ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  onClick?: () => void;
}

const ItemBox = ({children, onClick, padding, width, margin, display, alignItems, justifyContent} : ItemBoxProps) => {
  return (
    <Wrapper 
    style={{width, margin, padding, display, alignItems, justifyContent}}
    onClick={onClick}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 27rem;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: white;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;
  height: 100%;
  transition: all ease-in 100ms;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    transform: translate(0, 1rem)
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    &:hover {
      transform: none;
    }
  }
`

export default ItemBox