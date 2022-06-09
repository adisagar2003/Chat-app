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
    style={{width:"100%",height:180, opacity:1}}
    source={{uri:'https://random.imagecdn.app/500/150'}} />
    <TouchableOpacity style={{}}>
        <MaterialCommunityItems name="heart-outline" size={25} color="red" style={{position:'absolute',bottom:90,right:20}}  />
        <MaterialCommunityItems name="star-outline" size={25} color="yellow" style={{position:'absolute',bottom:60,right:20}} />
    </TouchableOpacity>
    <View style={{}}>
        <Text style={{color:'white',position:'absolute', bottom:110 ,left:34,fontWeight:'900',letterSpacing:1  }}>{props.name}</Text>
        
    </View>
    </TouchableOpacity>
    </View>
);

