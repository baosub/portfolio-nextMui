import React from 'react'
import Container from "@mui/material/Container"
import AtechStack from './AtechStack'
import Bprojects from './Bprojects'

const MainSection = () => {
  return (
    <Container maxWidth='xl'>
    
        <AtechStack/>
        <Bprojects/>
      
    </Container>
  )
}

export default MainSection
