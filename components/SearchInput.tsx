import { searchIcon } from "@/assets/images";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

interface SearchInputProps {
  searchText: string;
  setSearchText: (text: string) => void;
}
const SearchInput = ({ searchText, setSearchText }: SearchInputProps) => {
  const handleSearch = (text: string) => {
    setSearchText(text); 
  };

  return (
    <View style={styles.container}>
    <Image
      source={searchIcon}
      style={styles.icon}
    />
    <TextInput
      style={styles.input}
      placeholder="Search..."
      value={searchText}
      onChangeText={handleSearch}
    />
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 10,
        gap: 12,
        backgroundColor: Colors.gray,
      },
      input: {
        flex: 1,
        backgroundColor: 'transparent',
        fontFamily: Fonts.Inter_400Regular
      },
      icon: {
        width: 24, 
        height: 24,
      },
});

export default SearchInput;
