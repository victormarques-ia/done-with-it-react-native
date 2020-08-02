import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({});
