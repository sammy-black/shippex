import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { StackContainer } from "@/styles";
import Checkbox from "expo-checkbox";
import { Colors } from "@/constants/Colors";
import { ArrowInOut, box } from "@/assets/images";
import { ThemedText } from "@/components/ThemedText";

interface ShipmentCardProps {
  checked: boolean;
  setChecked: () => void;
}

const ShipmentCard = ({ checked, setChecked }: ShipmentCardProps) => {
  return (
    <StackContainer style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={checked}
        color={checked ? Colors.primary : undefined}
        onValueChange={setChecked}
      />
      <Image style={styles.imgCard} source={box} />
      <View>
        <ThemedText style={[styles.desc, { color: "#3F395C" }]}>AMB</ThemedText>
        <ThemedText type="defaultSemiBold">41785691423</ThemedText>
        <StackContainer spacing={5} style={{ alignItems: "center" }}>
          <ThemedText style={styles.desc}>CAIRO</ThemedText>
          <Feather name="arrow-right" size={8} color={Colors.primary} />
          <ThemedText style={styles.desc}>CAIRO</ThemedText>
        </StackContainer>
      </View>
      <View>
        <Text style={styles.status}>Received</Text>
      </View>
      <Image style={styles.arrowImg} source={ArrowInOut} />
    </StackContainer>
  );
};

export default ShipmentCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
   justifyContent: "space-between"
  },
  checkbox: {
    borderColor: "#D0D5DD",
    backgroundColor: "white",
    height: 20,
    width: 20,
    borderRadius: 5,
  },

  imgCard: {
    width: 40,
    height: 40,
  },

  desc: {
    fontSize: 13,
    color: "#757281",
  },
  status: {
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#D9E6FD",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 11,
  },
  arrowImg:{
  height: 16,
  width: 16
  }
});
