import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section7() {
  return (
    <View style={{ marginHorizontal: 15, paddingVertical: 5}}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Room Type</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 90, height: 100, borderRadius: 10, marginRight: 10 }}
          source={require('@/assets/week3/room-8.jpg')} // ใช้รูปห้องพัก
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Standard Twin Room</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#e26352ff', marginTop: 20, marginBottom: 5 }}>$399.99</Text>
          <Text style={{ fontSize: 12, color: '#148e90ff' }}>Hurry Up! This is your last room!</Text>
        </View>
      </View>
    </View>
  );
}