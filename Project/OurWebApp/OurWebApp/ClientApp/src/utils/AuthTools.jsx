import React, { useState } from "react";

import { useAuth0 } from "../react-auth0-spa";

const authGetUser = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const toggle = () => setIsOpen(!isOpen);
    const collapsed = false;

   
    return user;
};

export default authGetUser();
