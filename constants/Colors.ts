type ThemeColors = {
  text: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
};

type StatusColor = {
  bgColor: string;
  textColor: string;
};

type ColorsType = {
  primary: string;
  gray: string;
  white: string;
  error: string;
  gray_300: string;
  light: ThemeColors;
  dark: ThemeColors;
  STATUS_COLORS: {
    [key: string]: StatusColor;
  };
};

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const Colors: ColorsType = {
  primary: "#2F50C1",
  gray: "#F4F2F8",
  white: "#fff",
  error: "red",
  gray_300: "#D0D5DD",
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#A7A3B3",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#A7A3B3",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  STATUS_COLORS: {
    received: {
      bgColor: "#D9E6FD",
      textColor: "#2F50C1",
    },
    error: {
      bgColor: "#FEE3D4",
      textColor: "#D12030",
    },
    delivered: {
      bgColor: "#E3FAD6",
      textColor: "#208D28",
    },
    canceled: {
      bgColor: "#F4F2F8",
      textColor: "#58536E",
    },
    "on hold": {
      bgColor: "#FFF3D5",
      textColor: "#DB7E21",
    },
  },
};

export default Colors;
