import { createContext, useState } from "react";

// the actual value you want to access
export const MainContext = createContext({
  mainInfo: [],
  setMainInfo: () => null,
})

// this is the actual component
export const MainProvider = ({children}) => {
  const [mainInfo, setMainInfo] = useState([])
  const value = {mainInfo, setMainInfo};

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}