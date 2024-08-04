import { createContext, useEffect, useState } from "react"
import useSendRequest from "../hooks/use-send-request";

export const userContext = createContext({
    user:null,
    setUser:()=>{},
    isAuthenticated : false,
})

const DEFAULT_USER = {
    id:null,
    name:null,
    email:null,
    profile_picture:null,
}

export default function UserContextProvider({children}){
    const [user, setUser] = useState(DEFAULT_USER);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [sendRequest] =  useSendRequest();

    useEffect(()=>{
        fetchUserInfo();
    },[])

    function handleResponse(request, response){
        if (request?.status == 200){
            let user = response.data.user;

            setIsAuthenticated(true);
            setUser({
                id : user.id,
                name : user.name,
                email : user.email,
                profile_picture : user.profile_picture
            })
        }else{
            _setUser(null);
        }
    }

    async function fetchUserInfo(){
        const URL = "/api/users/me"
        const {request,response} = await sendRequest(URL);
        handleResponse(request, response);
    }

    const _setUser = (user) => {
        if (!user){
            setUser(DEFAULT_USER);
            setIsAuthenticated(false);
        }else{  
            setUser(user)
        }
    }

    return (
        <userContext.Provider value={{
            user:user,
            isAuthenticated :isAuthenticated,
            setUser:_setUser,
        }}>
            {children}
        </userContext.Provider>
    )
}