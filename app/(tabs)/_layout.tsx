import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: true,
  
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
        // Use a transparent background on iOS to show the blur effect
        position: 'absolute',
        },
        default: {},
      }),
      tabBarLabel: () => null, // Hide the title
      }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" size={28} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="perfil"
      options={{
        title: 'Perfil',
        tabBarIcon: ({ color }) => (    
          <MaterialIcons name="person" size={28} color={color} />
        ),
      }}
      />
      
    </Tabs>
  );
}
