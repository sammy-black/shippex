import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  ProfileIcon,
  ScanIcon,
  ShipmentIcon,
  WalletIcon,
} from "@/components/navigation/homeTabIcons";
import { Platform, StyleSheet, Text } from "react-native";
import { FONTS } from "@/constants";

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
          height: Platform.OS === "ios" ? 72 : 60,
          paddingVertical: 5,
          paddingBottom: Platform.OS === "ios" ? 20: 5,
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
    fontFamily: FONTS.SFPRO_Regular,
  },
});
