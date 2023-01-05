import React from 'react'
import { Icon } from '@iconify/react'
import BasicProfileButton from './BasicProfileButton'
import styled from 'styled-components'

const CalenderButton = () => {
  return (
    <BasicProfileButton>    <Icon
    icon="uiw:date"
   width="24"
   height="24"
    title="Home"
       color="735CDD"
/>
<ButtonText>Calender</ButtonText>
</BasicProfileButton>
  )
}

export const ButtonText = styled.p`

color: #211D29;
font-weight: 500;
margin-left: 0.5rem;
`

export default CalenderButton