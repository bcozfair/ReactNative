import React from 'react';
import { View, Text } from 'react-native';

export default function Section4() {
  return (
    <View style={{ marginHorizontal: 15, paddingVertical: 5, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hotel Description</Text>
      <Text style={{ fontSize: 14, color: 'dark' }}>
        218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor
        incididunt ut labore et dolore
      </Text>
    </View>
  );
}