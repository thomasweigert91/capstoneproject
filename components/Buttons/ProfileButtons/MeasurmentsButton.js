import React from 'react'
import BasicProfileButton from './BasicProfileButton'
import { Icon } from '@iconify/react'
import { ButtonText } from './CalenderButton'

const MeasurmentsButton = () => {
  return (
    <BasicProfileButton> <Icon
    icon="ion:body"
   width="24"
   height="24"
    title="Home"
       color="735CDD"
/>
<ButtonText>Measurment</ButtonText>
</BasicProfileButton>
  )
}

export default MeasurmentsButton