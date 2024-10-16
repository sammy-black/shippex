import React, { useEffect } from "react";
import {  StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import { splashLogo } from "@/assets/images";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const SplashScreen = () => {
    const router = useRouter()
  const scale = useSharedValue<number>(1); 
  const rotation = useSharedValue<number>(0); 
  const backgroundColor = useSharedValue<number>(0); 

  useEffect(() => {
    scale.value = withTiming(0.5, { duration: 700 }, () => {
      scale.value = withTiming(6, { duration: 700 }, () => {
        backgroundColor.value = withTiming(1, { duration: 700 });
        scale.value = withTiming(30, { duration: 700 });
        rotation.value = withTiming(45, { duration: 700 }, () => {
        
        });
      });
    });
  }, []);


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotation.value}deg` },
      ],
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        backgroundColor.value,
        [0, 1],
        ["white", Colors.primary]
      ),
    };
  });

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <Animated.Image
        source={splashLogo}
        style={[styles.logo, animatedStyle]}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 36,
    height: 36,
  },
});

export default SplashScreen;
