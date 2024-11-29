import { createContext, useState, useContext } from "react";

export const Text = createContext();

export function useText() {
  return useContext(Text);
}

export const DataProvider = ({ children }) => {
  const [text, setText] = useState("");

  return <Text.Provider value={[text, setText]}>{children}</Text.Provider>;
};
