'use client';

import { ReactNode } from "react";
import AuthContextProvider from "../../../context/authContext";

interface AuthProviderProps {
  children: ReactNode; // Defining the correct type for children
}

export default function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}







// "use client";

// import AuthContextProvider from "@/contexts/AuthContext";

// export default function Layout({ children }) {
//   return <AuthContextProvider>{children}</AuthContextProvider>;
// }