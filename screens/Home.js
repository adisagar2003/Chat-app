import React from 'react'
import {View,Text} from "react-native";
import { SafeAreaView } from 'react-native';
import Categories from '../components/Categories';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
export default function Home(){
    return (
        <SafeAreaView>
           <Text style={{textAlign:'center'}}>Chat-app</Text>
           <SearchBar  />

         <Categories />
        </SafeAreaView>
    )
}