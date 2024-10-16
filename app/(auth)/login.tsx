import { StyleSheet } from "react-native";
import React from "react";
import LoginScreeen from "@/screens/login";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  return (
    <>
      <StatusBar backgroundColor="white" style="dark" />
      <LoginScreeen />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
