import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function SearchBar(){
    return (    
<View style={{marginTop:15,flexDirection:"row"}}>
    <GooglePlacesAutocomplete  placeholder='search places'    
    styles={{
        textInput:{
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: "700",
            margin: 10,
        }

    }
    
    }
    
 
    />
</View>

    )
}

