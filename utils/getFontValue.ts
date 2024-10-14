import { Dimensions } from "react-native";

const BASE_WIDTH = 393;

export const responsiveFontSize = (size: number) => {
  const screenWidth = Dimensions.get("window").width;
  const scale = screenWidth / BASE_WIDTH;
  return Math.round(size * scale);
};
