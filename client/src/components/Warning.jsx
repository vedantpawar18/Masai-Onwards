import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function Warning() {
  return (
    <Alert status='warning'>
    <AlertIcon />
       Not eligible for any courses
  </Alert>
  )
}

export default Warning