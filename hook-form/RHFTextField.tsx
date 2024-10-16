import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { Controller, Control } from "react-hook-form";

import { responsiveFontSize } from "@/utils/getFontValue";
import { COLORS, FONTS } from "@/constants";


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
      render={({ field: { onChange, value }, fieldState: {isDirty, error } }) => (
        <View style={{ marginBottom: 10 }}>
          <View
            style={[
              styles.inputContainer,
              {
                borderColor: isFocused ? COLORS.primary : COLORS.gray,
                borderWidth: isFocused ? 1 : 0,
              },
            ]}
          >
            {label && (isFocused || isDirty) && <Text style={styles.label}>{label}</Text>}
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
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 6,
    height: 56,
  },

  input: {
    fontFamily: FONTS.Inter_400Regular,
    fontSize: responsiveFontSize(16),
    color: COLORS.primary,
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
    fontFamily: FONTS.Inter_400Regular,
    textAlign: "left",
    marginBottom: 5,
  },

  errorText: {
    color: COLORS.error,
    fontSize: responsiveFontSize(14),
    fontFamily: FONTS.Inter_400Regular,
    marginLeft: 10,
    marginTop: 3,
  },
});
