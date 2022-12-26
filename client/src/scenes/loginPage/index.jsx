import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from './Form';

export default function LoginPage() {
  const theme = useTheme()
  const isNonMobileScreen = useMediaQuery('(min-width: 1000px')

  return (
    <Box>
      {/* Top Banner */}
      <Box
        width='100%'
        backgroundColor={theme.palette.background.alt}
        p='1rem 6%' textAlign='center'
      >
        <Typography
          fontWeight='bold'
          fontSize='32px'
          color='primary'
          >
            FriendFace
        </Typography>
      </Box>

      {/* Form Box */}
      <Box
        width={isNonMobileScreen ? '50%' : '93%'}
        p='2rem'
        m='2rem auto'
        borderRadius='1.5rem'
        backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight='500' variant='h5' sx={{ mb: '1.5rem' }}>
          <p>FriendFace is a great new site for meeting people. How does it work?</p>
          <p>FriendFace works along the same principles as a cold or a terrible plague. But it’s not disgusting germs that Friendface spreads,it’s friendship. Each FriendFace page is like a Petri dish filled with friendship germs! When you stick your face into the dish, you may come away with millions of other people attached to your face! That’s right, it’s basically a diseased face of friendship.</p>
          <p>Just sign up with FriendFace by giving us all your personal information, and we’ll provide a web page where you can meet new friends, catch up with old ones, and maybe find that special someone. Don’t think about germs now, that analogy is over. Now it’s just love and companionship, and everything’s fine. We own everything you put on FriendFace, it says so in the Terms and Agreements. But don’t worry about that, we won’t use it to do anything bad, we promise! Just think about love and companionship, and everything’s fine. FriendFace! FriendFace! FRIENDFACE.</p>
          </Typography>
          <Form />
        </Box>
    </Box>
  )
}
