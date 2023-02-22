import { Box } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import React from 'react'

function Home() {
  return (
    <Box>
        <Input placeholder='otp' />
        <Button>Submit</Button>
    </Box>
  )
}

export default Home