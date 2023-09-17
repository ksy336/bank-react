import { createContext, useEffect, useLayoutEffect, useState } from 'react';

export type ShowSelectType = {
  showSelect: boolean;
}
export type ContextProps = {
  children: React.ReactNode;
}

export const DocumentStepContext = createContext<ShowSelectType | null>(null);

const DocumentContextProvider = ({children}: ContextProps) => {
  const [documentStep, setDocumentStep] = useState("document");

  const [codeStep, setCodeStep] = useState("code");

  useLayoutEffect(() => {
    const step = localStorage.getItem("document");
    if (step) setDocumentStep(step);
  },[]);

  useEffect(()=> {
    localStorage.setItem("document", documentStep);
  }, [documentStep]);


  useLayoutEffect(() => {
    const step = localStorage.getItem("code");
    if (step) setCodeStep(step);
  },[]);

  useEffect(()=> {
    localStorage.setItem("code", codeStep);
  }, [codeStep]);

  return (
    <DocumentStepContext.Provider value={{documentStep, setDocumentStep, codeStep, setCodeStep}}>
      {children}
    </DocumentStepContext.Provider>
  )
}
export default DocumentContextProvider;