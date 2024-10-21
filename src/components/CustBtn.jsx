import { View, Text } from 'react-native'
import React from 'react'
import { PressableOpacity } from 'react-native-pressable-opacity'

const CustBtn = ({children,onPress}) => {
  return (
    <PressableOpacity onPress={onPress} className='p-3 bg-slate-300 rounded-md items-center'>
        <Text>
            {children}
        </Text>
    </PressableOpacity>
  )
}

export default CustBtn