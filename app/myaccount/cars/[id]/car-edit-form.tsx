"use client"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CarEditForm = ({
  carType,
  carEngineType,
  data,
  actionFn
}: {
  carType: any;
  carEngineType: any;
  data:any;
  actionFn:any
}) => {
  const { results } = carType;
  const { results: engine } = carEngineType;

  console.log(data);

  const form = useForm({
    defaultValues:{
      company_name:data.company_name,
      model:data.model,
      registration_number:data. registration_number,
      transmission_type:data. transmission_type,
      engine_model:data.engine_model.toString(),
      gas_type:"",
      type:data.type.toString()


    }
  });

  const onSubmit = async (data:any) => {
    await actionFn(data);
    console.log(data);
  
  };
  return (
    <section className="w-full md:w-4/5 lg:w-3/5">
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-3 justify-start lg:mx-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* <div className="w-full flex flex-col md:flex-row md:space-x-4">
          <label className="w-full md:w-full">
            <span className="block mb-1 text-md">Model Name:</span>
            <Input className="text-md w-full border rounded-md px-4 py-2" placeholder="Enter car name" {...form.register("car_name")} />
          </label>
        </div> */}

          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md">Maker:</span>
              <Input
                className="text-md w-full border rounded-md px-4 py-2"
                placeholder="Enter maker name"
                {...form.register("company_name")}
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md">Model Name:</span>
              <Input
                className="text-md w-full border rounded-md px-4 py-2"
                placeholder="Enter model name"
                // defaultValue={data.model}
                {...form.register("model")}
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md">Registration Number:</span>
              <Input
                className="text-md w-full border rounded-md px-4 py-2"
                placeholder="Enter registration number"
                // defaultValue={data. registration_number}
                {...form.register("registration_number")}
              />
            </label>
          </div>

          <div className="block ">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md">Transmission Type:</span>
            </label>

            <FormField
              control={form.control}
              name="transmission_type"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Engine Model</FormLabel> */}
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Transmission Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AUTO">AUTO</SelectItem>
                      <SelectItem value="MANUAL">MANUAL</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="block">
            <FormField
              control={form.control}
              name="engine_model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Engine Model</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Engine Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {engine?.map((engineType: any) => {
                        return (
                          <SelectItem
                            key={engineType?.id}
                            value={`${engineType?.id}`}
                          >
                            {engineType?.engine_type}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="block ">
            <label className="w-full md:w-full">
              <span className="block mb-1 text-md">Gas Type:</span>
            </label>

            <FormField
              control={form.control}
              name="gas_type"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Engine Model</FormLabel> */}
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Gas Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="EV">Ev</SelectItem>
                      <SelectItem value="PETROL">Petrol</SelectItem>
                      <SelectItem value="DIESEL">Diesel</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="block">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Car Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Car Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {results?.map((carlist: any) => {
                        return (
                          <SelectItem
                            key={carlist?.id}
                            value={`${carlist?.id}`}
                          >
                            {carlist?.type_name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* <div className="flex flex-col md:flex-row md:space-x-4 p-3 ">
          <div className="block">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Car Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {results?.map((carlist: any) => {
                        return (
                          <SelectItem
                            key={carlist?.id}
                            value={`${carlist?.id}`}
                          >
                            {carlist?.type_name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div> */}

          <Button type="submit">Update car</Button>
        </form>
      </Form>
      </section>
  );
};

export default CarEditForm;
