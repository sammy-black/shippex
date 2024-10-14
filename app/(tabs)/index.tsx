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
  const [searchText, setSearchText] = useState<string>("");
  const [isAllChecked, setIsAllChecked] = useState(false);

  const toggleCheckAll = () => setIsAllChecked(!isAllChecked);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <ThemedView style={{ flex: 1 }}>
        <InnerContainer style={{ gap: 12 }}>
          <View style={styles.headerContainer}>
            <View style={styles.avatarContainer}>
              <Image style={styles.img} source={Avatar} />
            </View>
            <View style={styles.shippexLogoContainer}>
              <Image style={styles.img} source={shippexHeaderLogo} />
            </View>
            <View>
              <TouchableOpacity style={styles.iconBtn}>
                <Image style={styles.bell} source={bell} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.introContainer}>
            <ThemedText style={{ color: "#00000099" }}>Hello,</ThemedText>
            <ThemedText type="title">Ibrahim, Shaker</ThemedText>
          </View>

          <View>
            <SearchInput
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </View>
          <Spacer size={12} />
          <View style={styles.filterBtnContainer}>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="filter" size={24} color="#58536E" />
              <Text style={styles.btnLabel}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtn, { backgroundColor: Colors.primary }]}
            >
              <MaterialCommunityIcons
                name="line-scan"
                size={24}
                color="white"
              />
              <Text style={[styles.btnLabel, { color: Colors.white }]}>
                Add Scan
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer size={12} />
          <StackContainer style={styles.shipmentsContainer}>
            <ThemedText type="subtitle">Shipments</ThemedText>
            <TouchableOpacity onPress={toggleCheckAll}>
              <StackContainer style={{ alignItems: "center" }} spacing={8}>
                <Checkbox
                  style={styles.checkbox}
                  value={isAllChecked}
                  color={isAllChecked ? Colors.primary : undefined}
                  onValueChange={setIsAllChecked}
                />
                <ThemedText
                  style={{ color: Colors.primary }}
                  type="defaultRegular"
                >
                  Mark All
                </ThemedText>
              </StackContainer>
            </TouchableOpacity>
          </StackContainer>
          <ShipmentScreen />
        </InnerContainer>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 6,
    justifyContent: "space-between",
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 99999,
    backgroundColor: "white",
    overflow: "hidden",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  shippexLogoContainer: {
    height: 16,
    width: 92,
    overflow: "hidden",
  },

  iconBtn: {
    backgroundColor: Colors.gray,
    padding: 12,
    borderRadius: 999,
  },
  bell: {
    height: 24,
    width: 24,
    objectFit: "cover",
  },
  introContainer: {
    paddingVertical: 12,
    gap: 10,
  },

  filterBtnContainer: {
    flexDirection: "row",
    gap: 14,
  },

  filterBtn: {
    paddingVertical: 6,
    paddingRight: 18,
    paddingLeft: 14,
    borderRadius: 10,
    backgroundColor: Colors.gray,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    flex: 1,
  },

  btnLabel: {
    fontSize: 16,
    color: "#58536E",
  },
  shipmentsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    borderColor: "#D0D5DD",
    height: 20,
    width: 20,
    borderRadius: 5,
  },
});
