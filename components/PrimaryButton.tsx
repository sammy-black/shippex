import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { responsiveFontSize } from "@/utils/getFontValue";
import { COLORS, FONTS } from "@/constants";

interface PrimaryButtonProps {
  title: string;
  bgColor?: string;
  spinnerColor?: string;
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
  spinnerColor
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.btn,
        { backgroundColor: disabled ? COLORS.gray : bgColor || "white" },
      ]}
    >
      {loading ? (
        <ActivityIndicator  size={24} color={spinnerColor || COLORS.primary} />
      ) : (
        <Text
          style={[
            styles.btnLabel,
            { color: disabled ? "#A7A3B3" : textColor || COLORS.primary },
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
    fontFamily: FONTS.SFPRO_Bold,
    fontSize: responsiveFontSize(17),
  },
});
