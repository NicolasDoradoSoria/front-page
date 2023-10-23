import { Button } from '@nextui-org/react'
import React from 'react'

export const WhatsappButton = ({ phoneNumber }) => {
  return (
    <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target="_blank">
      <Button className='whatsappButton'>WhatsApp</Button>
    </a>
  )
}
