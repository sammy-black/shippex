import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import LoginScreeen from "@/screens/login";
import ComingSoon from "@/components/ComingSoon";

const Scan = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={{flex: 1}}> 
        <ComingSoon />
      </SafeAreaView>
      
    </>
  );
};

export default Scan;

const styles = StyleSheet.create({});
