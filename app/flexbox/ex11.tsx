import React from 'react';
import { View } from 'react-native';

export default function Ex11() {
  return (
    <View style={{ flex : 1 , flexDirection: 'column', justifyContent: 'center', }}>    
      <View style={{ flex : 1 , backgroundColor : '#4A90E2' , height : 100  }}></View>  
      <View style={{ flex : 1 ,backgroundColor : '#50E3C2' , height : 100  }}></View>    
    </View>
  );
}
