import React from 'react';
import { View } from 'react-native';

export default function Ex12() {
  return (
    <View style={{ flex : 1 , flexDirection: 'row', justifyContent: 'space-between', }}>    
      <View style={{ flex : 1 , backgroundColor : '#50E3C2' , width : 100  }}></View>  
      <View style={{ flex : 1 ,backgroundColor : '#4A90E2' , width : 100  }}></View> 
      <View style={{ flex : 1 ,backgroundColor : '#9013FE' , width : 100  }}></View>    
    </View>
  );
}
