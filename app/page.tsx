'use client'


import { useState, useEffect } from 'react';
import { Box, Button, Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Navbar from './components/NavBar';
import MainSection from './bodyComponents/MainSection';
import Mainfooter from './footercomponents/Mainfooter';








const page = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

 

  return (
    
   
    
   <Box>
      <Box><Navbar/></Box>

      <Box><MainSection/></Box>

      <Box><Mainfooter/></Box>

      {showScroll && (
        <Fab
          
          size="small"
          onClick={scrollToTop}
          sx={{ position: 'fixed', bottom: 20, right: 20,  bgcolor: 'rgb(255, 255, 255)', color: 'rgb(0,0,0)' }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </Box>
   
    
  
  )
}

export default page
