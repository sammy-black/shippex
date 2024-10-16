import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import { InnerContainer, Spacer, StackContainer } from "@/styles";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import { RHFTextField } from "@/hook-form";
import Feather from "@expo/vector-icons/Feather";
import PrimaryButton from "@/components/PrimaryButton";
import axios from "@/utils/axios";
import { useAuth } from "@/context/AuthContext";

const schema = yup.object().shape({
  url: yup.string().required("URL is required"),
  email: yup
    .string().required("Email / username is required"),
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

const LoginScreeen = () => {
  const router = useRouter();
  const {setAuthState} = useAuth()
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
        authenticated: true
      })
      setIsLoading(false);
      router.replace("/(app)/(tabs)")
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  const handleGoBack = useCallback(() => {
    router.back();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InnerContainer style={styles.innerContainer}>
        {Platform.OS === "ios" && <View style={styles.grabber} />}
        <Spacer size={10} />
        <TouchableOpacity onPress={handleGoBack}>
          <StackContainer>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color={Colors.primary}
            />
            <Text style={styles.subTitle}>Cancel</Text>
          </StackContainer>
        </TouchableOpacity>
        <Text style={styles.loginText}>Login</Text>
        <Text style={[styles.subTitle, { color: "#757281" }]}>
          Please enter your First, Last name and your phone number in order to
          register
        </Text>
        <Spacer size={22} />
        <View style={{ flex: 1, justifyContent: "space-between", gap: 19 }}>
          <View>
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
            disabled={!isDirty || isLoading}
            loading={isLoading}
            bgColor={Colors.primary}
            textColor="white"
            title="Login"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </InnerContainer>
    </SafeAreaView>
  );
};

export default LoginScreeen;

const styles = StyleSheet.create({
  innerContainer: {
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
    fontFamily: Fonts.SFPRO_Regular,
    color: Colors.primary,
  },
  loginText: {
    fontSize: 34,
    fontFamily: Fonts.SFPRO_SemiBold
  },
});
