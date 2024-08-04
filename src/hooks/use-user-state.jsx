import { useContext } from "react";
import { userContext } from "../contexts/user-context";

export default function useUserState(){
    const context = useContext(userContext);

    return context;
}