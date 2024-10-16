import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" options={{
		presentation: "modal",
		animation: "slide_from_bottom"
	  }} />
    </Stack>
  );
};

export default AuthLayout;
