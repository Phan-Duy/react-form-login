import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ElementRef, useEffect, useRef } from "react";

type htmlFormProps = {
  values?: TFormState;
  onSubmit: (values: TFormState) => void;
};

const schema = z.object({
  title: z
    .string()
    .min(1, "Title min length  = 1")
    .max(255, "max length = 255"),
  price: z.number().min(1, "min price = 1"),
  description: z.string().min(1, "min length 1").max(500, "max length = 500"),
  images: z.string().url("url not valid"),
});

type TFormState = z.infer<typeof schema>;

export default function Form({
  values: valuesProp,
  onSubmitProp,
}: htmlFormProps) {
  const defaultValues = valuesProp ?? {
    title: "",
    price: 0,
    description: "",
    images: "",
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { touchedFields, errors },
    setError,
    watch,
  } = useForm<TFormState>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (values) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              {...register("title")}
            />
            <span className="text-red-500">{errors.title?.message || ""}</span>e
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              description
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              {...register("description")}
            />
            <span className="text-red-500">
              {errors.description?.message || ""}
            </span>
            e
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              price
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              {...register("price")}
            />
            <span className="text-red-500">{errors.price?.message || ""}</span>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              images
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              {...register("images")}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}