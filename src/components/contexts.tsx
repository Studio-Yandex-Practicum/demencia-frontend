import { createContext } from "react";

interface ContextProps {
  setLastQuestionId?: (id: string) => void;
}

export const AppContext = createContext<ContextProps>({});
