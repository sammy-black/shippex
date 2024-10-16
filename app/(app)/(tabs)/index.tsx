import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShipmentScreen from "@/screens/shipment";
import { COLORS } from "@/constants";

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} />
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
