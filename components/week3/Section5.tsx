import React from 'react';
import { Text, View } from 'react-native';
import MyIcon from './MyIcon'; // ต้องสร้าง MyIcon.tsx ก่อน

export default function Section5() {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      marginHorizontal: 15
    }}>
      {/* สมมติว่ามี MyIcon.tsx ที่สร้างไว้แล้ว */}
      <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
        <MyIcon name="wifi" size={28} color="#148e90ff" />
        <Text style={{ color: 'grey', fontSize: 10, marginTop: -15 }}>wifi</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <MyIcon name="coffee" size={28} color="#148e90ff" />
        <Text style={{ color: 'grey', fontSize: 10, marginTop: -15 }}>coffee</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <MyIcon name="bath" size={28} color="#148e90ff" />
        <Text style={{ color: 'grey', fontSize: 10, marginTop: -15 }}>bath</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <MyIcon name="car" size={28} color="#148e90ff" />
        <Text style={{ color: 'grey', fontSize: 10, marginTop: -15 }}>car</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <MyIcon name="paw" size={28} color="#148e90ff" />
        <Text style={{ color: 'grey', fontSize: 10, marginTop: -15 }}>paw</Text>
      </View>

    </View>
  );
}