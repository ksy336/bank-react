import { createContext, useEffect, useState } from 'react';

export type ShowSelectType = {
  showSelect: boolean;
}
export type ContextProps = {
  children: React.ReactNode;
}

export const ShowSelectContext = createContext<ShowSelectType | null>(null);

const ContextProvider = ({children}: ContextProps) => {
  const [showSelect, setShowSelect] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const showSelectData = localStorage.getItem("showSelect") as boolean;
    if (showSelectData) setShowSelect(showSelectData);
  }, []);

  useEffect(() => {
    JSON.stringify(localStorage.setItem("showSelect", String(showSelect)));
  });

  useEffect(() => {
    const isSentData = localStorage.getItem("isSent") as boolean;
    if (isSentData) setIsSent(isSentData);
  }, []);

  useEffect(() => {
    JSON.stringify(localStorage.setItem("isSent", String(isSent)));
  });

  return (
    <ShowSelectContext.Provider value={{showSelect, setShowSelect, isSent, setIsSent}}>
      {children}
    </ShowSelectContext.Provider>
  )
}
export default ContextProvider;