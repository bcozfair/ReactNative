import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ReviewCardProps {
  imageSource: any;
  name: string;
  rating: number; 
  title: string;
  content: string;
  date: string;
}

// Function เพื่อสร้าง Icon ดาวตามคะแนน
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let starName: 'star' | 'star-half' | 'star-o';
    let starColor = '#FFD700'; // สีเหลืองทองสำหรับดาวเต็ม/ครึ่ง

    if (rating >= i) {
        starName = 'star';
    } else if (rating >= i - 0.5) {
        starName = 'star-half';
    } else {
        starName = 'star-o';
        starColor = 'grey'; // สีของขอบดาวที่ว่างยังเป็นสีเหลืองอ่อนตามรูป
    }

    stars.push(
      <FontAwesome 
        key={i} 
        name={starName} 
        size={14} 
        color={starColor} 
        style={{ marginRight: 2 }} 
      />
    );
  }
  return <View style={{ flexDirection: 'row', marginTop: 3 }}>{stars}</View>;
};


export default function ReviewCard({ imageSource, name, rating, title, content, date }: ReviewCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={imageSource} style={styles.profileImage} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          {renderStars(rating)} 
        </View>
        {/* Date: อยู่ขวาสุดของ Header */}
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f0f0ff', // สีเทาอ่อนสำหรับพื้นหลังการ์ด
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    borderRadius: 8,
    // ลบเงาออกเพื่อให้ดูแบนราบเหมือนในภาพ
    // elevation: 0, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginTop: 5, // เพิ่มระยะห่างจากส่วน Header
  },
  content: {
    fontSize: 12,
    color: 'gray',
    lineHeight: 18,
  },
});