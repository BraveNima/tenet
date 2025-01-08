"use client";

import AdminTable from "@/components/AdminTable";
import Drawer from "@/components/Drawer";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Drawer />
      <AdminTable />
    </div>
  );
}
