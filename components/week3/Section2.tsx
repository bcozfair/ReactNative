import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // ต้องมีการติดตั้ง @expo/vector-icons

export default function Section2() {
  return (
    <View
      style={{
        // 1. จัดตำแหน่งให้ทับส่วนล่างของรูป (ถ้า Section 1 ถูกจัดด้วย flex: 1)
        marginTop: -40, // ใช้ margin ลบเพื่อเลื่อนขึ้นไปทับรูปภาพด้านบน
        // 2. ลักษณะการ์ดสีขาว
        backgroundColor: '#edebebff',
        marginHorizontal: 18,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        // 3. เงา (ถ้าต้องการ)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 6,
        elevation: 10,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold' , textAlign: "center" }}>
        Hilton San Francisco
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 4}}>
        <View style={{ flexDirection: "row" }}>

          {/* 5 ดาวเหลือง */}
          <FontAwesome name="star" size={16} color="#f4d301ff" />
          <FontAwesome name="star" size={16} color="#f4d301ff" />
          <FontAwesome name="star" size={16} color="#f4d301ff" />
          <FontAwesome name="star" size={16} color="#f4d301ff" />
          <FontAwesome name="star-half-o" size={16} color="#f4d301ff" />
        </View>
        </View>


          <Text style={{ fontSize: 12, color: 'dark' , textAlign: "center" , marginBottom: 15}}>
            Facilities provided may range from a modest quality mattress in a small room to large suites
          </Text>
        </View>
        );
}