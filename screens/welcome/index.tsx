import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { InnerContainer } from "@/styles";
import { logoWhite } from "@/assets/images";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants";

const WelcomeScreen = () => {
  const router = useRouter()
  return (
    <>
      <InnerContainer style={styles.InnerContainer}>
        <View />

        <Image style={styles.logo} source={logoWhite} />
        <PrimaryButton onPress={() => router.navigate("/login")} title="Login" />
      </InnerContainer>
      
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  InnerContainer: {
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 52,
    paddingHorizontal: 24,
  },
  logo: {
    width: 207,
    height: 36,
    objectFit: "contain",
  },
});
