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

function HomeScreen() {
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
    const Tab = createBottomTabNavigator();
    return (
        <SafeAreaView>
            
           <Text style={{textAlign:'center' ,fontWeight:'900'}}>A D - C H A T </Text>
           <SearchBar  />
<ScrollView>
         <Categories />
      
         </ScrollView>
         <NavigationContainer style={{zIndex:100 ,backgroundColor:'red'}}>
             
         <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
        
    )
}