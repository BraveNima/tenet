"use client";

import ChevronDownIcon from "@/components/Icons/ChevronDownIcon";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Time from "../Time";

export default function GeneralForm() {
  return (
    <form className="border border-[#D1D5DB] w-[838px] h-[518px] py-6 px-4 rounded-[10px]">
      <div className="">
        <div className="flex items-center justify-between mb-6">
          <h2 className="leading-6 font-medium">General</h2>
          <ChevronDownIcon />
        </div>
        <div className="flex flex-col gap-6 w-[600px]">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm leading-5 text-[#374151]">
              Symptom/Reason for visit
            </label>
            <Textarea />
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-1 w-[292px]">
              <label htmlFor="" className="text-sm leading-5 text-[#374151]">
                Onset of Symptom
              </label>
              <Input />
            </div>
            <div className="flex flex-col gap-1 w-[292px]">
              <label htmlFor="" className="text-sm leading-5 text-[#374151]">
                Onset of Symptom
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>{" "}
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col gap-1 w-[292px]">
              <label htmlFor="" className="text-sm leading-5 text-[#374151]">
                Progression{" "}
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-4">
                <Time title="Day" />
                <Time title="Month" />
                <Time title="Year" />
              </div>
            </div>
          </div>{" "}
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col gap-1 w-[292px]">
              <label htmlFor="" className="text-sm leading-5 text-[#374151]">
                Urination{" "}
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>{" "}
          <div className="w-full mb-1">
            <label htmlFor="">Coughing/Sneezing</label>
            <div className="flex gap-6 items-center">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Yes{" "}
                </label>
              </div>{" "}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  No{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
