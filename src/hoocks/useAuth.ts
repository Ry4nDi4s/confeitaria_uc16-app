import { AuthContext } from "@/cotexts/AuthContextUser";
import { useContext } from "react";


export function useAuth() {
  return useContext(AuthContext);
}