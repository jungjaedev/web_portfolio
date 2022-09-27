import { useRecoilValue } from "recoil";
import Box from 'theme/Default/Box'
import Archiving from 'Components/Archiving/Archiving';
import Skills from 'Components/Skills/Skills';
import Projects from 'Components/Projects/Projects';
import ButtonToTop from 'Components/ButtonToTop/ButtonToTop';
import { scrollAtom } from 'state/seletedComponent';



const Body = () => {
  const scrollComponent = useRecoilValue(scrollAtom);
  console.log(scrollComponent)

  return (
    <Box flexDirection="column">
      <Archiving />
      <Skills />
      <Projects />
      <ButtonToTop />
    </Box>
  )
}

export default Body