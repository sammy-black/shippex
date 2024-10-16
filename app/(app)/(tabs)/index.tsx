import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/Colors";
import ShipmentScreen from "@/screens/shipment";

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor={Colors.white} />
      <SafeAreaView style={{ flex: 1 }}>
        <ShipmentScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    borderColor: "#D0D5DD",
    height: 20,
    width: 20,
    borderRadius: 5,
  },
});
