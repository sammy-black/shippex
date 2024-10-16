import React from "react";
import { StyleSheet, View } from "react-native"; // If using React Native
import { ThemedText } from "./ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fonts } from "@/constants/Fonts";


const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Coming Soon</ThemedText>
      <ThemedText type="subtitle" style={styles.subtitle}>
        This page is under construction. Please check back soon!
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },

  subtitle: {
    marginTop: 10,
    textAlign: "center",
    fontFamily: Fonts.SFPRO_Regular
  },
});

export default ComingSoon;
