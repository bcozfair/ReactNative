import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';

export default function Chart() {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };
    const screenWidth = Dimensions.get("window").width;

    const pieData = [
        { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Toronto', population: 2800000, color: '#FF5252', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Beijing', population: 527612, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'New York', population: 8538000, color: '#4CAF50', legendFontColor: '#7F7F7F', legendFontSize: 12 }
    ];

    return (
        <View style={{ flex: 1 , padding : 10 }}>            
            <Text style={{ fontSize : 20 }}>
                Bezier Line Chart
            </Text>
            <LineChart
                data={data}
                width={screenWidth-20} // from react-native
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical : 10,
                    borderRadius: 15
                }}
            />

            <Text style={{ fontSize: 20, marginTop: 10 }}>
                Example Pie Chart
            </Text>
            <PieChart
                data={pieData}
                width={screenWidth-20}
                height={220}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                absolute
                style={{ marginVertical: 10, borderRadius: 15 }}
            />

            {/* อยากได้ ProgressChart ด้วย */}
            <ProgressChart
                data={{ labels: ["Swim", "Bike", "Run"], data: [0.4, 0.6, 0.8] }}
                width={screenWidth-20}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                style={{ marginVertical: 10, borderRadius: 15 }}
            />
        </View>

    );
}
