import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";

import { Spacer, StackContainer } from "@/styles";
import { ArrowInOut, box, colouredArrow, whatsapp } from "@/assets/images";
import { ThemedText } from "@/components/ThemedText";
import { ShipmentData } from "@/types/ShipmentData";
import { COLORS, FONTS } from "@/constants";
import { responsiveFontSize } from "@/utils/getFontValue";

interface ShipmentCardProps {
  checked: boolean;
  setChecked: () => void;
  item?: ShipmentData;
}

interface StatusBoxProps {
  status: string;
}


const { STATUS_COLORS } = COLORS;

const StatusBox = ({ status }: StatusBoxProps) => {
  const currentStatus = status || "received";
  const { bgColor, textColor } =
    STATUS_COLORS[currentStatus.toLowerCase()] || STATUS_COLORS["received"];

  return (
    <View style={[styles.statusContainer, { backgroundColor: bgColor }]}>
      <Text style={[styles.statusText, { color: textColor }]}>
        {currentStatus}
      </Text>
    </View>
  );
};
const ShipmentCard = ({ item, checked, setChecked }: ShipmentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const animatedHeight = useSharedValue(0);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
    animatedHeight.value = withTiming(isExpanded ? 0 : 140, {
      duration: 300,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      overflow: "hidden",
    };
  });

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: checked ? "#6E91EC" : "transparent",
          borderWidth: checked ? 2 : 0,
          paddingBottom: isExpanded ? 0 : 12,
        },
      ]}
    >
      <StackContainer style={styles.contentContainer}>
        <Checkbox
          style={styles.checkbox}
          value={checked}
          color={checked ? COLORS.primary : undefined}
          onValueChange={setChecked}
        />
        <Image style={styles.imgCard} source={box} />
        <View>
          <ThemedText style={[styles.desc, { color: "#3F395C" }]}>
            AMB
          </ThemedText>
          <ThemedText type="defaultSemiBold">{item?.name}</ThemedText>
          <StackContainer spacing={5} style={{ alignItems: "center" }}>
            <ThemedText style={styles.desc}>{item?.origin_city}</ThemedText>
            <Feather name="arrow-right" size={8} color={COLORS.primary} />
            <ThemedText style={styles.desc}>
              {item?.destination_city}
            </ThemedText>
          </StackContainer>
        </View>
        <StatusBox status={item?.status || ""} />
        <TouchableOpacity onPress={toggleExpand}>
          <Image
            style={styles.arrowImg}
            source={checked ? colouredArrow : ArrowInOut}
          />
        </TouchableOpacity>
      </StackContainer>

      {isExpanded && (
        <Animated.View style={[styles.expandedDetails, animatedStyle]}>
          <StackContainer
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <View>
              <ThemedText style={styles.location}>Origin</ThemedText>
              <ThemedText style={styles.locationTitle}>
                {item?.origin_city}
              </ThemedText>
              <ThemedText style={styles.desc}>Dokki, 22 Nile St.</ThemedText>
            </View>
            <Feather name="arrow-right" size={16} color={COLORS.primary} />
            <View>
              <ThemedText style={styles.location}>Destination</ThemedText>
              <ThemedText style={styles.locationTitle}>
                {item?.destination_city}
              </ThemedText>
              <ThemedText style={styles.desc}>Smoha, 22 max St.</ThemedText>
            </View>
          </StackContainer>
          <Spacer size={24} />
          <StackContainer
            style={{ justifyContent: "flex-end", paddingBottom: 12 }}
            spacing={14}
          >
            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: "#6E91EC" }]}
            >
              <Ionicons name="call-sharp" size={24} color="white" />
              <Text style={styles.actionBtnLabel}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: "#25D366" }]}
            >
              <Image style={styles.whatsapp} source={whatsapp} />
              <Text style={styles.actionBtnLabel}>Whatsapp</Text>
            </TouchableOpacity>
          </StackContainer>
        </Animated.View>
      )}
    </View>
  );
};

export default ShipmentCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    paddingTop: 12,
    marginBottom: 8,
  },

  contentContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
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
    fontFamily: FONTS.Inter_400Regular,
    fontSize: responsiveFontSize(13),
    color: "#757281",
  },
  statusContainer: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#fff",
  },
  statusText: {
    textTransform: "uppercase",
    fontFamily: FONTS.Inter_500Medium,
    fontSize: 10,
  },
  arrowImg: {
    height: 24,
    width: 24,
  },
  expandedDetails: {
    backgroundColor: "#F4F2F8",
    paddingHorizontal: 12,
    paddingTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "100%",
  },
  location: { fontSize: 11, color: COLORS.primary },
  locationTitle: {
    fontSize: 16,
  },
  actionBtn: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 14,
    paddingRight: 18,
    paddingVertical: 6,
    borderRadius: 10,
  },
  actionBtnLabel: {
    fontSize: 16,
    fontFamily: FONTS.Inter_400Regular,
    color: "white",
  },
  whatsapp: {
    height: 20,
    width: 20,
  },
});
