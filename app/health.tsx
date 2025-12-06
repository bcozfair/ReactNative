import Bmi from "@/components/week5/Bmi";
import Heartbeat from "@/components/week5/Heartbeat";
import React from "react";

import { ScrollView, View } from "react-native";



export default function Health() {

    return (

        <ScrollView style={{ flex: 1, padding: 20, backgroundColor: 'lightblue',  }}>
            {/* แสดงผล Bmi Component */}
            <Bmi />
            
            {/* แสดงผล Heartbeat Component ต่อท้าย */}
            <Heartbeat />
        </ScrollView>

    );

}