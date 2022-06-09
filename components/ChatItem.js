import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native'
import { Touchable, TouchableOpacity } from 'react-native';
import MaterialCommunityItems from 'react-native-vector-icons/Ionicons'

const hardCodeData=[
    {
name: 'Adi',
lastSeen:'2 hours ago'

    },
    {
name: 'Jill',
lastSeen:'1 day ago'
    },
    {
        name:'Ada ',
        lastSeen:'4 days ago'
    },
    {
        name: 'Leon',
        lastSeen:'1 minute ago'
    }
]


export default function ChatItem(props) {

    return (
      <View style={{}}>

          {hardCodeData.map((data)=>{
              return (<RestaurantImage name={data.name} lastSeen={data.lastSeen} />)
          })}
    <RestaurantImage name='Jill' lastVisited='2 hours ago' />
    <RestaurantImage name='Jill' lastVisited='2 hours ago' />
      </View>
    )
  
  }

  const RestaurantImage =  (props)=>(
      <View style={{padding:20,backgroundColor:'#e8e9eb'}}>
        <TouchableOpacity>
    <Image
    style={{width:"100%",height:180}}
    source={{uri:'https://images.unsplash.com/photo-1640244674671-f32e0f186e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}} />
    <TouchableOpacity style={{}}>
        <MaterialCommunityItems name="heart-outline" size={25} color="#ffffff" />
    </TouchableOpacity>
    <View style={{}}>
        <Text style={{color:'white'}}>{props.name}</Text>
        
    </View>
    </TouchableOpacity>
    </View>
);

