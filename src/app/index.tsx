import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'
import post from '../../assets/data/posts';

const Home = () => {
  return (
    <Redirect href='/(tabs)'/>
  )
}

export default Home