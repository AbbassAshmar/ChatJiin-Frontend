import { createBrowserRouter} from "react-router-dom";
import SimpleNavFooter from "./pagesWrappers/simple-nav-footer";
import NavFooter from "./pagesWrappers/nav-footer";
import RequiresAuthentication from "./pagesWrappers/requires-authentication";
import Register from "./pages/Register/register";
import Chat from "./pages/Chat/chat";
import RequiresInvitation from "./pagesWrappers/requires-invitation";
import Login from "./pages/Login/login";
import InvitationRequired from "./pages/InvitationRequired/invitation-required";

export const Router = createBrowserRouter([
    {
        element: <SimpleNavFooter />,
        children : [
            {
                path :"/invitation-required-error",
                element : <InvitationRequired />,
            }
        ]
    },
    
    {
        element: <RequiresAuthentication />,
        children : [
            {
                element : <NavFooter />,
                children : [
                    {
                        path : "/",
                        element : <Chat />
                    },
                ]
            }
        ]
    },

    {
        element : <RequiresInvitation />,
        children : [
            {   
                element : <SimpleNavFooter />,
                children : [
                    {
                        index :true,
                        path : "/login",
                        element : <Login />
                    },
                    {
                        path : "/register",
                        element : <Register />
                    }
                ]
            },
          
        ]
    },
]);