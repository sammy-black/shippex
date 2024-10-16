import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { searchIcon } from "@/assets/images";
import { COLORS, FONTS } from "@/constants";

interface SearchInputProps {
  searchText: string;
  setSearchText: (text: string) => void;
}
const SearchInput = ({ searchText, setSearchText }: SearchInputProps) => {
  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const clearSearch = () => {
    setSearchText("");
  };
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={clearSearch}>
          <AntDesign name="close" size={24} color="#6E91EC" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 12,
    backgroundColor: COLORS.gray,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    fontFamily: FONTS.Inter_400Regular,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default SearchInput;
