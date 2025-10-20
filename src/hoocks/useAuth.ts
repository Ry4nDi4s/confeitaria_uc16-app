import { AuthContext } from "@/cotexts/AuthContext";
import { useContext } from "react";


export function useAuth() {
  return useContext(AuthContext);
}