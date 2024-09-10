import React from 'react'
import Container from "@mui/material/Container"
import AtechStack from './AtechStack'
import Bprojects from './Bprojects'
import CgithubProjects from './CgithubProjects'

const MainSection = () => {
  return (
    <>

    <Container maxWidth='lg'><AtechStack />
      <Bprojects />
      <CgithubProjects /></Container>

      

    </>
  )
}

export default MainSection
