import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Checkbox from "expo-checkbox";
import { useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Avatar, bell, shippexHeaderLogo } from "@/assets/images";
import { Colors } from "@/constants/Colors";
import { InnerContainer, Spacer, StackContainer } from "@/styles";
import SearchInput from "@/components/SearchInput";
import ShipmentScreen from "@/screens/shipment";

export default function HomeScreen() {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toggleCheckAll = () => setIsAllChecked(!isAllChecked);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
       <ShipmentScreen />
    </SafeAreaView>
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
