import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
} from "react-native-reanimated";
import { splashLogo } from "@/assets/images";
import { COLORS } from "@/constants";


const SplashScreen = () => {
  const scale = useSharedValue<number>(1);
  const rotationX = useSharedValue<number>(0);
  const backgroundColor = useSharedValue<number>(0);

  useEffect(() => {
    scale.value = withTiming(
      2,
      {
        duration: 800,
        easing: Easing.linear,
      },
      () => {
        scale.value = withTiming(
          6,
          {
            duration: 800,
            easing: Easing.bezier(0.84, 0.01, 0.16, 1),
          },
          () => {
            backgroundColor.value = withTiming(1, { duration: 800 });
            scale.value = withTiming(10, {
              duration: 800,
              easing: Easing.bezier(0.74, 0, 0.23, 0.98),
            });
            rotationX.value = withTiming(80, {
              duration: 800,
              easing: Easing.bezier(0.74, 0, 0.23, 0.98),
            });
          }
        );
      }
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { perspective: 1000 },
        { rotateX: `${rotationX.value}deg` },
      ],
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        backgroundColor.value,
        [0, 1],
        ["white", COLORS.primary]
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
