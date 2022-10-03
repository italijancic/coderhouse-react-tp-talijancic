import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function ItemCount({initial, stock}) {

  const [cant, setCant] = useState(initial)

  const addHandler = () => {
    if (cant < stock) setCant(cant + 1)
  }

  const substractionHandler = () => {
    if (cant > initial) setCant(cant - 1)
  }

  return (
    <Box>

      <Button onClick={addHandler}> + </Button>

      <Typography variant='span' component='span'>
        {cant}
      </Typography>

      <Button onClick={substractionHandler}> - </Button>

    </Box>
  )
}
