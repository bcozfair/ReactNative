import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function PokemonLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'orange' }}>
      <Tabs.Screen
        name="charmander"
        options={{
          title: 'Charmander',
          tabBarIcon: ({ color }) => <FontAwesome name="fire" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="pikachu"
        options={{
          title: 'Pikachu',
          tabBarIcon: ({ color }) => <FontAwesome name="bolt" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ivysour"
        options={{
          title: 'Ivysour',
          tabBarIcon: ({ color }) => <FontAwesome name="leaf" size={24} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}