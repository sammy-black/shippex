import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { Controller, Control } from "react-hook-form";
import { Colors } from "@/constants/Colors";
import { responsiveFontSize } from "@/utils/getFontValue";
import { Fonts } from "@/constants/Fonts";

interface RHFTextFieldProps extends TextInputProps {
  name: string;
  label?: string;
  hidePassword?: boolean;
  rightIcon?: ReactNode;
  control: Control<any>;
  handleRightIcon?: () => void;
}

const RHFTextField: React.FC<RHFTextFieldProps> = ({
  name,
  label,
  hidePassword,
  rightIcon,
  control,
  handleRightIcon,
  ...others
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={{ marginBottom: 10 }}>
          <View
            style={[
              styles.inputContainer,
              {
                borderColor: isFocused ? Colors.primary : Colors.gray,
                borderWidth: isFocused ? 1 : 0,
              },
            ]}
          >
            {label && isFocused && <Text style={styles.label}>{label}</Text>}
            <TextInput
              id={name}
              style={styles.input}
              value={value}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={onChange}
              {...others}
            />
            {rightIcon && (
              <TouchableOpacity
                onPress={handleRightIcon}
                style={styles.rightIcon}
              >
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default RHFTextField;

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    backgroundColor: Colors.gray,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 6,
    height: 56,
  },

  input: {
    fontFamily: Fonts.Inter_400Regular,
    fontSize: responsiveFontSize(16),
    color: Colors.primary,
  },

  rightIcon: {
    position: "absolute",
    right: 15,
    zIndex: 1,
    top: 18,
  },

  label: {
    color: "#58536E",
    fontSize: responsiveFontSize(11),
    fontFamily: Fonts.Inter_400Regular,
    textAlign: "left",
    marginBottom: 5,
  },

  errorText: {
    color: Colors.error,
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.Inter_400Regular,
    marginLeft: 10,
    marginTop: 3,
  },
});
