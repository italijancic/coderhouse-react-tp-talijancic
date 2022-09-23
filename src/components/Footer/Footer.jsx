import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box m={5}>
      <Typography
        align='center'
        variant='body1'
        component='footer'
        style={{
          margin: '0.5em 0',
          padding: '1em'
        }}
      >
        🚀 2022 | Developed by D&T Soluciones™
      </Typography>
    </Box>
  )
}

