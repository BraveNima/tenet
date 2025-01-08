"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTableContext } from "../Contexts/useTableContext";

export default function AdminTable() {
  const { tableData } = useTableContext() || { tableData: [] };

  return (
    <Table className="">
      <TableCaption>A list of your recent Pruducts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Pruduct</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData?.map((data, index) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{data.productName}</TableCell>
            <TableCell className="text-right">${data.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
