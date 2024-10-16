import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";

import { Spacer, StackContainer } from "@/styles";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { responsiveFontSize } from "@/utils/getFontValue";
import { COLORS, FONTS } from "@/constants";


interface FilterActionSheetProps {
  visible: boolean;
  handleClose: () => void;
  filterOptions: string[];
  handleFilterOptions: (options: string[]) => void;
}

const FilterActionSheet = ({
  visible,
  handleClose,
  filterOptions = [],
  handleFilterOptions,
}: FilterActionSheetProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleDone = useCallback(() => {
    handleFilterOptions(selectedFilters);
    handleClose();
  }, [selectedFilters]);

  return (
    <Modal
      onRequestClose={handleClose}
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.contentContainer}>
        <ThemedView style={styles.bottomContainer}>
          <View style={{ width: "100%", paddingHorizontal: 24 }}>
            <View style={styles.grabber} />
            <Spacer size={12} />
            <StackContainer style={{ justifyContent: "space-between" }}>
              <TouchableOpacity onPress={handleClose}>
                <ThemedText style={{ color: COLORS.primary }}>
                  Cancel
                </ThemedText>
              </TouchableOpacity>

              <ThemedText type="defaultSemiBold">Filter</ThemedText>
              <TouchableOpacity onPress={handleDone}>
                <ThemedText style={{ color: COLORS.primary }}>Done</ThemedText>
              </TouchableOpacity>
            </StackContainer>
          </View>

          <View style={styles.divider} />
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={styles.shipmentStatus}>SHIPMENT STATUS</Text>
          </View>
          <StackContainer style={styles.filterContainer}>
            {filterOptions.map((filter, index) => (
              <TouchableOpacity
                key={filter}
                onPress={() => toggleFilter(filter)}
                style={[
                  styles.filterOption,
                  selectedFilters.includes(filter) && styles.activeFilter,
                ]}
              >
                <Text
                  style={[
                    styles.filterBtnLabel,
                    {
                      color: selectedFilters.includes(filter)
                        ? COLORS.primary
                        : "#58536E",
                    },
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </StackContainer>
        </ThemedView>
      </View>
    </Modal>
  );
};

export default FilterActionSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#0000004D",
    justifyContent: "flex-end",
  },
  bottomContainer: {
    paddingTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 24,
    gap: 12,
  },
  grabber: {
    width: 36,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#A7A3B3",
    alignSelf: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#EAE7F2",
  },
  shipmentStatus: {
    fontSize: 13,
    fontFamily: FONTS.Inter_400Regular,
  },

  filterContainer: {
    paddingHorizontal: 24,
    flexWrap: "wrap",
    gap: 10,
  },
  filterOption: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },

  filterBtnLabel: {
    fontFamily: FONTS.Inter_400Regular,
    fontSize: responsiveFontSize(16),
  },
  activeFilter: {
    borderColor: "#6E91EC",
  },
});
