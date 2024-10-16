import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  ProfileIcon,
  ScanIcon,
  ShipmentIcon,
  WalletIcon,
} from "@/components/navigation/homeTabIcons";
import { Fonts } from "@/constants/Fonts";
import { StyleSheet, Text } from "react-native";

interface TabBarLabelProps {
  focused: boolean;
  title: string;
}

const TabBarLabel = ({ title, focused }: TabBarLabelProps) => {
  return (
    <Text style={[styles.tabLabel, { color: focused ? "#2F50C1" : "#A7A3B3" }]}>
      {title}
    </Text>
  );
};
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2F50C1",
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          color: "#5B4CCC",
        },
        tabBarStyle: {
          height: 60,
          paddingVertical: 5,
          paddingBottom: 7,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <ShipmentIcon color={color || "#A7A3B3"} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Shipment" />
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          tabBarIcon: ({ color }) => <ScanIcon color={color} />,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Scan" />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => <WalletIcon focused={focused} />,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Wallet" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => <ProfileIcon  focused={focused}   />,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 11,
    fontFamily: Fonts.SFPRO_Regular,
  },
});
