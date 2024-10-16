import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const AppLayout = () => {
  const { authState } = useAuth();

  if (!authState?.authenticated) {
    return <Redirect href="/(auth)/welcome" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
