import React from 'react'
import {View,Text} from "react-native";
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { Divider } from '@rneui/base';
import BottomTabs from '../components/BottomTabs';
import Categories from '../components/Categories';
import ChatItem from '../components/ChatItem';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native'

function HomeScreen() {

  //css
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      textAlign: "center",
    }
  });


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
export default function Home(){
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      color:'red',
      textAlign: "center",
    }
  });
    const Tab = createBottomTabNavigator();
    return (
      <View>
        <SafeAreaView>
            
           <Text style={{textAlign:'center' ,fontWeight:'900'}}>A D - C H A T </Text>
           <SearchBar  />
<ScrollView>
  
         <Categories />
      <ChatItem />
      
         </ScrollView>
      
    </SafeAreaView>
     
       </View>
    )
}