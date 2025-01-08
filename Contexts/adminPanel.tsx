"use client";

import usePersist from "@/hooks/usePersist";
import { invoiceData } from "@/lib/constants";
import React, { createContext, Dispatch, SetStateAction } from "react";

interface LoginProviderProps {
  children: React.ReactNode;
}

interface TableContextType {
  tableData: typeof invoiceData;
  setTableData: Dispatch<SetStateAction<typeof invoiceData>>;
}

export const TableContexts = createContext<TableContextType | undefined>(
  undefined
);

export const TableProvider = ({ children }: LoginProviderProps) => {
  const [tableData, setTableData] = usePersist("items", invoiceData);

  return (
    <TableContexts.Provider value={{ tableData, setTableData }}>
      {children}
    </TableContexts.Provider>
  );
};
