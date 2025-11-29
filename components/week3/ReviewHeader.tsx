import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// ข้อมูลจำลองสำหรับกราฟดาว (เปอร์เซ็นต์และสีของแท่งกราฟ)
const starData = [
    { count: 5, value: 5 },
    { count: 4, value: 5 },
    { count: 3, value: 40 },
    { count: 2, value: 45 },
    { count: 1, value: 10 },
];

// Component สำหรับแท่งกราฟดาวแต่ละแถว
// Component สำหรับแท่งกราฟดาวแต่ละแถว
const StarRatingBar = ({ count, percentage }: { count: number, percentage: number }) => {
    // สร้าง Icon ดาว 5 ดวง
    const stars = [];
    const starSize = 9; // กำหนดขนาดเดียว

    for (let i = 5; i >= 1; i--) {
        const isFilled = i <= count;

        stars.push(
            <FontAwesome
                key={i}
                // ยังคงใช้ 'star' สำหรับดาวที่เต็ม และ 'star-o' สำหรับดาวที่ว่าง
                name={isFilled ? 'star' : 'star-o'}
                size={starSize}
                // 💡 ถ้าดาวว่าง (isFilled เป็น false) ให้ใช้สีขาว ('white')
                color={isFilled ? 'gray' : 'white'}
                style={{ marginRight: 0.5 }}
            />
        );
    }

    return (
        <View style={barStyles.row}>
            {/* 1. Icon ดาว (จัดชิดขวาของพื้นที่ Icon) */}
            <View style={barStyles.starIcons}>
                {stars}
            </View>

            {/* 2. แท่งกราฟ */}
            <View style={barStyles.barContainer}>
                <View
                    style={[
                        barStyles.bar,
                        { width: `${percentage}%` }
                    ]}
                />
            </View>
        </View>
    );
};


export default function ReviewHeader() {
    return (
        <View style={styles.container}>

            {/* ส่วนซ้าย: คะแนนรวม */}
            <View style={styles.scoreContainer}>
                <Text style={styles.score}>4.7</Text>
                <Text style={styles.outOf}>out of 5</Text>
            </View>

            {/* ส่วนขวา: กราฟดาว */}
            <View style={styles.graphContainer}>
                <View>
                    {starData.map((item) => (
                        <StarRatingBar
                            key={item.count}
                            count={item.count}
                            percentage={item.value}
                        />
                    ))}
                </View>

                {/* จำนวน Ratings */}
                <Text style={styles.ratingsCount}>25 Ratings</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 5,
        // borderBottomWidth: 1, // ลบเส้นแบ่งด้านล่าง
        // borderColor: '#eee',
        backgroundColor: 'white',
    },
    scoreContainer: {
        width: 90,
        marginHorizontal: 30,
        alignItems: 'center',
        paddingTop: 10,
    },
    score: {
        fontSize: 48,
        fontWeight: 'semibold',
        color: '#FF6347', // สีแดงอมส้ม
    },
    outOf: {
        fontSize: 14,
        color: 'gray',
        marginTop: -5,
    },
    graphContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: 5, // ปรับให้กราฟไม่สูงเกินไป
    },
    ratingsCount: {
        marginTop: 10,
        textAlign: 'right',
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold', // ปรับเป็นปกติ
    },
});

const barStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
    },
    starIcons: {
        flexDirection: 'row',
        width: 70,
        justifyContent: 'flex-end',
        marginRight: 5,
    },
    barContainer: {
        flex: 1,
        height: 4, // ลดความสูงของแท่ง
        backgroundColor: '#eee',
        borderRadius: 2,
    },
    bar: {
        height: 4,
        backgroundColor: '#FF6347',
        borderRadius: 2,
    },
});