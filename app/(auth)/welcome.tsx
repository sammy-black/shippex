import { StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from "@/screens/welcome";


const Welcome = () => {
  return (
    <>
     <StatusBar style="light" />
      <WelcomeScreen />
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
