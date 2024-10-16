import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { responsiveFontSize } from "@/utils/getFontValue";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "defaultRegular"
    | "subtitle"
    | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "defaultRegular" ? styles.defaultRegular : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.Inter_400Regular
  },
  defaultSemiBold: {
    fontSize: responsiveFontSize(18),
   fontFamily: Fonts.Inter_600SemiBold
  },
  defaultRegular: {
    fontSize: responsiveFontSize(18),
    fontFamily: Fonts.SFPRO_Regular,
  },
  title: {
    fontSize: responsiveFontSize(28),
    fontFamily: Fonts.SFPRO_SemiBold
  },
  subtitle: {
    fontSize: responsiveFontSize(22),
  },
  link: {
    fontSize: 16,
    color: Colors.primary,
  },
});
