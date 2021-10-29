import React, { useEffect } from 'react'
import RNElementsModule, { Counter } from 'react-native-elements'

const App = () => {
  useEffect(() => {
    console.log(RNElementsModule)
  })

  return <Counter />
}

export default App
