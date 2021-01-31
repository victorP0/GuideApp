import { createContext } from "react";

export const GuidesContext = createContext({
  guides: [],
  setGuides: () => {}
});