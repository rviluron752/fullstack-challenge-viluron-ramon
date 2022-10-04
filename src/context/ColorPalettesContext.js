import { createContext, useState } from "react";

export const ColorPalettesContext = createContext({
  colorPalettes: [],
  setColorPalettes: () => {}
})

export const ColorPalettesProvider = ({ children }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const value = { colorPalettes, setColorPalettes };

  return <ColorPalettesContext.Provider value={value}>{children}</ColorPalettesContext.Provider>;
}