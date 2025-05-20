import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="details/[id]"
        options={{
          title: 'Details',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.pages" color={color} />,
        }}
      />
      <Tabs.Screen
        name="examples/props"
        options={{
          title: 'ex. Props',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="terminal" color={color} />,
        }}
      />
      <Tabs.Screen
        name="examples/state"
        options={{
          title: 'ex. State',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="terminal" color={color} />,
        }}
      />
      <Tabs.Screen
        name="examples/layout"
        options={{
          title: 'ex. Layout',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="terminal" color={color} />,
        }}
      />
      <Tabs.Screen
        name="examples/services"
        options={{
          title: 'ex. Services',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="terminal" color={color} />,
        }}
      />
      <Tabs.Screen
        name="inventory/index"
        options={{
          title: 'Inventory Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
