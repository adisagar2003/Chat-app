import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import SearchBar from './components/SearchBar';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native'
// Import the functions you  need from the SDKs you need


export default function App() {
  return (
   <Home />

  );
}


