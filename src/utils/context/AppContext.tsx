"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from "react";

import { getSkipById } from "../actions";
import { SkipTypes } from "../types";

interface AppContextData {
  setFooterOpen: Dispatch<React.SetStateAction<boolean>>;
  footerOpen: boolean;
  setSelectedSkipId: Dispatch<SetStateAction<number | undefined>>;
  selectedSkipId: number | undefined;
  handleSelectSkip: (id: number) => SkipTypes | undefined;
  setSelectedSkip: Dispatch<React.SetStateAction<SkipTypes | undefined>>;
  selectedSkip: SkipTypes | undefined;
}

const AppContext = createContext<AppContextData | null>(null);

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [footerOpen, setFooterOpen] = useState(false);
  const [selectedSkipId, setSelectedSkipId] = useState<number | undefined>(
    undefined
  );
  const [selectedSkip, setSelectedSkip] = useState<SkipTypes | undefined>(
    undefined
  );

  const handleSelectSkip = (id: number): SkipTypes | undefined => {
    const skip: SkipTypes | undefined = getSkipById(id);
    setSelectedSkip(skip);
    return skip;
  };

  const value: AppContextData = {
    footerOpen,
    setFooterOpen,
    selectedSkip,
    setSelectedSkip,
    selectedSkipId,
    setSelectedSkipId,
    handleSelectSkip
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
