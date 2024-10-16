import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { InnerContainer } from "@/styles";
import { Colors } from "@/constants/Colors";
import { logoWhite } from "@/assets/images";
import PrimaryButton from "@/components/PrimaryButton";
import LoginScreeen from "../login";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()
  return (
    <>
      <InnerContainer style={styles.InnerContainer}>
        <View />

        <Image style={styles.logo} source={logoWhite} />
        <PrimaryButton onPress={() => router.navigate("/login")} title="Login" />
      </InnerContainer>
      {/* <LoginScreeen visible={showModal} handleClose={() => setShowModal(false)} /> */}
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  InnerContainer: {
    backgroundColor: Colors.primary,
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
