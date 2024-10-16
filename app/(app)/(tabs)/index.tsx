import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShipmentScreen from "@/screens/shipment";
import { COLORS } from "@/constants";

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ShipmentScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
});
