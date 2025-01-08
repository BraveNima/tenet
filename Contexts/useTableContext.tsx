import { useContext } from "react";
import { TableContexts } from "./adminPanel";

export const useTableContext = () => {
  return useContext(TableContexts);
};
