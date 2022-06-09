import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native'
import { useState } from 'react'

export default function   Categories() {
    const [active,isActive] = useState(false);

    const CategoryButtons = (props)=>{
        
        return (
        <Button title={props.title}  onPress={()=>console.log('Show')}  name='active'   color="#841584"
        />)
    }
    return (
      <View style={{padding:30,flexDirection:'row',justifyContent:'space-around'}}>
     <CategoryButtons title='Chat' />
     <CategoryButtons title='History'/>
     <CategoryButtons  title='Data'/>


      </View>
    )
  }

