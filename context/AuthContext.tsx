import { useRouter } from "expo-router";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface IAuthState {
  authenticated: boolean;
  username: string;
}

interface AuthContextType {
  logOut: () => void;
  authState: IAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState<IAuthState>({
    authenticated: false,
    username: "",
  });

  const logOut = async () => {
    setAuthState({
      username: "",
      authenticated: false,
    });

    router.replace("/(auth)/welcome");
  };

  const value = {
    logOut,
    authState,
    setAuthState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
