import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "@/context/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SFPRO_Bold: require("../assets/fonts/SFPRODISPLAYBOLD.otf"),
    SFPRO_Medium: require("../assets/fonts/SFPRODISPLAYMEDIUM.otf"),
    SFPRO_Regular: require("../assets/fonts/SFPRODISPLAYREGULAR.otf"),
    Inter_700Bold: require("../assets/fonts/Inter/Inter-Bold.ttf"),
    Inter_300Light: require("../assets/fonts/Inter/Inter-Light.ttf"),
    Inter_500Medium: require("../assets/fonts/Inter/Inter-Medium.ttf"),
    Inter_400Regular: require("../assets/fonts/Inter/Inter-Regular.ttf"),
    Inter_600SemiBold: require("../assets/fonts/Inter/Inter-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}
