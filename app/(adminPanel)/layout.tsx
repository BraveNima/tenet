"use client";

import Sidebar from "@/components/layout/Sidebar";
import { TableProvider } from "@/Contexts/adminPanel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TableProvider>
      <main className="">
        <div className="flex items-center">
          <div className="w-[30%]">
            <Sidebar />
          </div>
          {children}
        </div>
      </main>
    </TableProvider>
  );
}
