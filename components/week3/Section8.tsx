import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; // 💡 ต้อง Import TouchableOpacity

export default function Section8() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        marginTop: 5,
        borderTopWidth: 1, // เพิ่มเส้นแบ่งด้านบนตามรูปตัวอย่าง
        borderColor: '#ccc',

      }}
    >
      {/* ส่วนแสดงราคา */}
      <View>
        <Text style={{ fontSize: 12, color: 'dark' }}>Price</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#e26352ff' }}>$399.99</Text>
        <Text style={{ fontSize: 12, color: 'dark' }}>AVG/Night</Text>
      </View>

      {/* ปุ่ม Book Now ที่ปรับปรุงแล้ว */}
      <TouchableOpacity
        style={{
          backgroundColor: '#e26352ff', // สีแดงอมส้มตามรูปตัวอย่าง (Tomato)
          paddingVertical: 12,      // กำหนด padding แนวตั้ง
          paddingHorizontal: 15,    // กำหนด padding แนวนอน
          borderRadius: 8,         // ทำให้มุมโค้งมน (ตามรูป)
          // อาจเพิ่ม shadow เล็กน้อยถ้าต้องการ
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => { alert('Book Now pressed!'); }} // เพิ่ม action เมื่อกดปุ่ม
      >
        <Text style={{ color: '#eee', fontSize: 18, fontWeight: 'semibold' }}>
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}