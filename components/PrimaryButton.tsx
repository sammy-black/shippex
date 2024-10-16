import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { responsiveFontSize } from "@/utils/getFontValue";

interface PrimaryButtonProps {
  title: string;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}
const PrimaryButton = ({
  title,
  onPress,
  textColor,
  disabled,
  bgColor,
  loading,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.btn,
        { backgroundColor: disabled ? Colors.gray : bgColor || "white" },
      ]}
    >
      {loading ? (
        <ActivityIndicator  size={24} color={Colors.primary} />
      ) : (
        <Text
          style={[
            styles.btnLabel,
            { color: disabled ? "#A7A3B3" : textColor || Colors.primary },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    height: 56,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  btnLabel: {
    textAlign: "center",
    fontFamily: Fonts.SFPRO_Bold,
    fontSize: responsiveFontSize(17),
  },
});
