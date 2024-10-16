import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


import { useAuth } from "@/context/AuthContext";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import PrimaryButton from "@/components/PrimaryButton";
import { COLORS } from "@/constants";


const Profile = () => {
  const { authState, logOut } = useAuth();

  const handleLogout = async () => {
    logOut();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={{ flex: 1, paddingVertical: 24 }}>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={{ gap: 16 }}>
              <ThemedView>
                <ThemedText style={{ textAlign: "center" }} type="title">
                  {authState?.username}
                </ThemedText>
              </ThemedView>
            </View>

            <View>
              <ThemedView style={{ marginTop: 16, paddingHorizontal: 24 }}>
                <PrimaryButton
                  bgColor={COLORS.primary}
                  textColor="white"
                  onPress={handleLogout}
                  title="Logout"
                />
              </ThemedView>
            </View>
            <View></View>
          </View>
        </ThemedView>
      </SafeAreaView>
    </>
  );
};

export default Profile;
