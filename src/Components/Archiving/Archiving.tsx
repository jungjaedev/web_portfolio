import styled from 'styled-components';
import BodyBox from 'theme/Default/BodyBox'
import TitleText from 'theme/Default/TitleText'
import ArchivingItem from './ArchivingItem';


const Archiving = () => {
  return (
    <BodyBox id="archiving" backgroundColor="#333333">
      <TitleText color="white">ARCHIVING</TitleText>
      <List>
        <ArchivingItem type="Github" />
        <ArchivingItem type="Velog" />
      </List>
    </BodyBox>
  )
}

const List = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  width: 90%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items:center;
  }
`

export default Archiving