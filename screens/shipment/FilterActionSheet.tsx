import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { InnerContainer } from "@/styles";

interface FilterActionSheetProps {
  visible: boolean;
  handleClose: () => void;
}

const FilterActionSheet = ({
  visible,
  handleClose,
}: FilterActionSheetProps) => {
  return (
    <Modal
      onRequestClose={handleClose}
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Pressable onPress={handleClose} style={{flex: 1}}>
        <InnerContainer style={styles.contentContainer}>
          <Text>FilterActionSheet</Text>
        </InnerContainer>
      </Pressable>
    </Modal>
  );
};

export default FilterActionSheet;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#0000004D",
  },
});
