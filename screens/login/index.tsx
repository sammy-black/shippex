import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView, 
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { InnerContainer, Spacer, StackContainer } from "@/styles";
import { RHFTextField } from "@/hook-form";
import Feather from "@expo/vector-icons/Feather";
import PrimaryButton from "@/components/PrimaryButton";
import axios from "@/utils/axios";
import { useAuth } from "@/context/AuthContext";
import { COLORS, FONTS } from "@/constants";

const schema = yup.object().shape({
  url: yup
    .string()
    .required("Website URL is required"),
  email: yup.string().required("Email / username is required"),
  password: yup.string().required("Password is required"),
});

const defaultValues = {
  url: "",
  email: "",
  password: "",
};

interface LoginResponse {
  message: string;
  home_page: string;
  full_name: string;
}

const LoginScreen = () => { 
  const router = useRouter();
  const { setAuthState } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (userData: any) => {
    setIsLoading(true);
    try {
      const { email: usr, url, password: pwd } = userData;
      const { data } = await axios.post<LoginResponse>(`/login`, { usr, pwd });
      setAuthState({
        username: data?.full_name,
        authenticated: true,
      });
      setIsLoading(false);
      router.replace("/(app)/(tabs)");
    } catch (error: any) {
      Alert.alert("Error", error.message);
      setIsLoading(false);
    }
  };

  const handleGoBack = useCallback(() => {
    router.back();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 5} 
      >
        <SafeAreaView style={{ flex: 1 }}>
          <InnerContainer style={styles.innerContainer}>
            {Platform.OS === "ios" && <View style={styles.grabber} />}

            <TouchableOpacity onPress={handleGoBack}>
              <StackContainer>
                <MaterialIcons
                  name="arrow-back-ios"
                  size={24}
                  color={COLORS.primary}
                />
                <Text style={styles.subTitle}>Cancel</Text>
              </StackContainer>
            </TouchableOpacity>
            <Text style={styles.loginText}>Login</Text>
            <Text style={[styles.subTitle, { color: "#757281" }]}>
              Please enter your First, Last name and your phone number in order
              to register
            </Text>
            <Spacer size={22} />

           
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
              keyboardShouldPersistTaps="handled"
            >
              <View style={{ gap: 19 }}>
                <RHFTextField
                  label="URL"
                  control={control}
                  name={"url"}
                  placeholder="URL"
                />
                <RHFTextField
                  label="Username / Email"
                  control={control}
                  name={"email"}
                  placeholder="Username / Email"
                />

                <RHFTextField
                  label="Password"
                  control={control}
                  name={"password"}
                  secureTextEntry={hidePassword}
                  hidePassword={hidePassword}
                  placeholder="Password"
                  handleRightIcon={() => setHidePassword(!hidePassword)}
                  rightIcon={
                    <Feather
                      name={hidePassword ? "eye-off" : "eye"}
                      size={20}
                      color="black"
                    />
                  }
                />
              </View>
              <PrimaryButton
                disabled={!isDirty}
                loading={isLoading}
                bgColor={COLORS.primary}
                spinnerColor="white"
                textColor="white"
                title="Login"
                onPress={handleSubmit(onSubmit)}
              />
            </ScrollView>
          </InnerContainer>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1, 
    paddingTop: 6,
    backgroundColor: "white",
    gap: 16,
    paddingBottom: 52,
  },
  grabber: {
    width: 36,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#A7A3B3",
    alignSelf: "center",
  },
  subTitle: {
    fontSize: 17,
    fontFamily: FONTS.SFPRO_Regular,
    color: COLORS.primary,
  },
  loginText: {
    fontSize: 34,
    fontFamily: FONTS.SFPRO_SemiBold,
  },
});
