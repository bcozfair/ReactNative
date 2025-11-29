import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
// ต้องสร้างไฟล์เหล่านี้ก่อน

import { FontAwesome } from '@expo/vector-icons'; 
import ReviewHeader from '@/components/week3/ReviewHeader';
import ReviewCard from '@/components/week3/ReviewCard';

// ข้อมูลจำลองสำหรับ Review Card (อ้างอิงจากรูป)
const reviews = [
  {
    id: 1,
    imageSource: require('@/assets/week3/profile-3.jpg'), // ใช้รูป Profile-2.jpg
    name: 'Grigoriy Kozhukhov',
    rating: 4,
    title: 'Nice Place',
    content: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
    date: 'Jun 2018',
  },
  {
    id: 2,
    imageSource: require('@/assets/week3/profile-4.jpg'), // ใช้รูป Profile-2.jpg หรือรูปอื่น
    name: 'Ea Tipene',
    rating: 4,
    title: 'Great for families',
    content: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
    date: 'Jun 2018',
  },
  // สามารถเพิ่มรีวิวอื่น ๆ ได้
];


export default function ReviewScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* จำลองแถบ Header ด้านบน (Reviews, Replay) */}
      <View style={styles.mockHeader}>
          <FontAwesome name="arrow-left" size={20} color="#e26352ff" />
          <Text style={styles.headerTitle}>Reviews</Text>
          <Text style={styles.headerReplay}>Replay</Text>
      </View>
      
      <ScrollView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        
        <ReviewHeader />

        <View style={styles.cardListContainer}>
          {reviews.map(review => (
            <ReviewCard
              key={review.id}
              imageSource={review.imageSource}
              name={review.name}
              rating={review.rating}
              title={review.title}
              content={review.content}
              date={review.date}
            />
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    mockHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,        
        backgroundColor: 'white',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
    headerReplay: {
        fontSize: 18,
        color: '#e26352ff',
    },
    cardListContainer: {
        paddingVertical: 10,
        backgroundColor: 'white'
    }
});