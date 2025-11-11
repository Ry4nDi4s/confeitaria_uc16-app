import { AuthContext } from "@/cotexts/AuthContextAdm";
import { useContext } from "react";


export function useAuth() {
  return useContext(AuthContext);
}