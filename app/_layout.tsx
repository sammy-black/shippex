import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as ExpoSplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "@/context/AuthContext";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SFPRO_Bold: require("../assets/fonts/SFPRODISPLAYBOLD.otf"),
    SFPRO_SemiBold: require("../assets/fonts/SFProDisplay-Semibold.ttf"),
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
      ExpoSplashScreen.hideAsync();
      prepareApp()
    }
  }, [loaded]);

  const prepareApp = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }, []);



  if (!loaded) {
    return null;
  }
  if (!appIsReady) {
    return <SplashScreen />;
  }


  return (
    <ThemeProvider  value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}
