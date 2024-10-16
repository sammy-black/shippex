import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, bell, shippexHeaderLogo } from "@/assets/images";
import { COLORS } from "@/constants";


const Header = () => {
  return (
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
  );
};

export default Header;

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
    backgroundColor: COLORS.gray,
    padding: 12,
    borderRadius: 999,
  },
  bell: {
    height: 24,
    width: 24,
    objectFit: "cover",
  },
});
