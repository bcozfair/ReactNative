import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section6() {
  return (
    <View style={{ marginHorizontal: 15, paddingVertical: 5, borderTopWidth: 1, borderBottomWidth: 1,  borderColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Location</Text>
      <Text style={{ fontSize: 14, color: 'dark' }}>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et...
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 10, backgroundColor: 'gray' }}>
        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 20/6 }} source={require('@/assets/week3/map.jpg')} />
      </View>

    </View>
  );
}