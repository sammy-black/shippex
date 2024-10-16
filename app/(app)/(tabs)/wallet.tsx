import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ComingSoon from "@/components/ComingSoon";

const Wallet = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ComingSoon />
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
