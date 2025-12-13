import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {

    const [onlineEvents, setOnlineEvents] = useState([]);

    const loadOnlineEvents = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            setOnlineEvents(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineEvents();
    }, []);

    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up Coming Events</Text>
            <Text style={{ color: "grey" }}>What's the Worst That Could Happen</Text>
            <FlatList
                horizontal={true}
                data={onlineEvents}
                renderItem={
                    ({ item, index }: any) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image
                                    style={{ width: '100%', height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                    source={{ uri: item.uri }}
                                />
                                <View style={{ flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 1, borderColor: 'gray' }}>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontSize: 16, color: 'red', textAlign: 'center' }}>{item.month}</Text>
                                        <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>{item.date}</Text>
                                    </View>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontSize: 18, color: 'black' }}>{item.title}</Text>
                                        <Text style={{ color: 'gray' }}>{item.datetime}</Text>
                                        <Text style={{ color: 'gray' }}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={(item: any) => item.id}
            />
        </View>
    );
}
