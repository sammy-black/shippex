import { COLORS } from "@/constants";
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spinner;
