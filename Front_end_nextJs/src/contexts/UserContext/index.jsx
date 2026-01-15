"use client";

import { createContext } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
    return <UserContext.Provider>{children}</UserContext.Provider>;
}
