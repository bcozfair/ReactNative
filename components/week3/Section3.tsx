import React from 'react';
import { View, Text } from 'react-native';

export default function Section3() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 ,marginTop: 10 }}>
      {/* คะแนน 9.5 ในวงกลมสีแดง */}
      <View style={{
        backgroundColor: '#e26352ff',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      }}>
        <Text style={{ color: '#eee', fontWeight: 'normal', fontSize: 18 }}>9.5</Text>
      </View>

      <View>
        <Text style={{ fontWeight: 'normal', color: '#e26352ff', fontSize: 18 }}>Excellent</Text>
        <Text style={{ fontSize: 13, color: 'dark' }}>See 801 reviews</Text>
      </View>
    </View>
  );
}