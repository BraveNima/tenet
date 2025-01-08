import { useState } from "react";
import { Button } from "./ui/button";
import CloseIcon from "./Icons/CloseIcon";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Input } from "./ui/input";
import { useTableContext } from "@/Contexts/useTableContext";
import { toast } from "react-toastify";

interface TestItem {
  productName: string;
  amount: string;
  id: number;
}

interface FormData {
  test: TestItem[];
}

export default function Drawer() {
  const [open, setOpen] = useState(false);
  const { setTableData } = useTableContext() || {};

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      test: [{ productName: "", amount: "", id: 1 }],
    },
  });
  const handleClick = () => {
    setOpen((open) => !open);
    reset();
  };
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { test } = data;
    // @ts-expect-error Todo fix the type of setTableDAta
    setTableData((prevArray) => [...prevArray, ...Object.values(test!)]);

    setOpen((open) => !open);
    toast("Your Product Has Been Successfully Added", {
      position: "bottom-left",
      theme: "dark",
    });
  };

  return (
    <>
      {open ? (
        <div className="open-class">
          <article className="w-[514px] bg-primary absolute top-0 right-0 h-screen border border-[#E4E4E7] rounded-xl z-10">
            <div className="w-full">
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="text-white text-lg">Canoncial</h3>
                <div onClick={handleClick}>
                  <CloseIcon />
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="px-4">
                <ul className="flex flex-col gap-4">
                  {fields.map((item, index) => {
                    return (
                      <li className="flex gap-4" key={item.id}>
                        <div className="flex flex-col gap-1 ">
                          <Input
                            placeholder="Pruduct Name"
                            {...register(`test.${index}.productName`, {
                              required: true,
                            })}
                          />
                          {errors.test?.[index]?.productName && (
                            <span className="text-red-700 whitespace-nowrap">
                              This can not be empty
                            </span>
                          )}
                        </div>

                        <Controller
                          render={({ field }) => (
                            <Input placeholder="amount" {...field} />
                          )}
                          name={`test.${index}.amount`}
                          control={control}
                        />
                        <button
                          className="size-[42px] flex items-center justify-center rounded-full"
                          type="button"
                          onClick={() => remove(index)}
                        >
                          <span className="text-white">-</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="my-6">
                  <Button
                    className="bg-secondary text-black"
                    type="button"
                    onClick={() => {
                      append({
                        productName: "",
                        amount: "",
                        id: Math.random(),
                      });
                    }}
                  >
                    Add new Product
                  </Button>
                </div>
                <Button
                  className="w-[200px] bg-secondary text-black  flex items-center justify-center rounded-sm"
                  type="submit"
                >
                  Submit
                </Button>{" "}
              </form>

              <div className="border-t border-t-[#E4E4E7] pt-5 px-8 mt-20">
                <div
                  className="
flex items-center justify-end"
                >
                  <Button onClick={handleClick} className="bg-secondary">
                    <span className="text-black">Cancel</span>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : (
        <Button onClick={handleClick}>Click to add a item</Button>
      )}
    </>
  );
}
