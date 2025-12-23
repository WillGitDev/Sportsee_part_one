"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  return <ThemeContext.Provider value="test">{children}</ThemeContext.Provider>;
}
