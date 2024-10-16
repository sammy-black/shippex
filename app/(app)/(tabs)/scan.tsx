import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import LoginScreeen from "@/screens/login";

const Scan = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaView>
        <Button
          onPress={() => router.navigate("/welcome")}
          title="Welcome screeen"
        />
      </SafeAreaView>
      
    </>
  );
};

export default Scan;

const styles = StyleSheet.create({});
