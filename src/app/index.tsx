import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const Home = () => {
  return (
    <Redirect href='/(tabs)'/>
  )
}

export default Home