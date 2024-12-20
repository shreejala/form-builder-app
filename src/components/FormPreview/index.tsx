import { FormFieldType } from "@/types/formFIeld";
import {
  FormButton,
  FormCheckBox,
  FormTextInput,
  RadioInput,
  SelectInput,
} from "../molecules";
import Label from "../molecules/LabelText";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createSchema, { FieldConfig } from "@/helpers/schemaHelper";
import { z } from "zod";
import { useState } from "react";

interface FormPreviewProps {
  items: FormFieldType[];
}

const FormPreview = ({ items }: FormPreviewProps) => {
  const [successMsgm, setSuccessMsg] = useState("");

  const formItems: FieldConfig[] = items
    .filter((itm) => itm.type !== "button" && itm.type !== "label")
    .map((itm) => {
      return {
        type: itm?.formFieldType || "text",
        name: itm.formFieldName,
      };
    });

  const formSchema = createSchema(formItems);
  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Data", data);
    setSuccessMsg("Successfully validated !!");
  };

  console.log("Dsfg", items)
  return (
    <div className="flex flex-col gap-2">
      <h3>Form Preview</h3>

      <div className=" rounded-md p-5 flex flex-col gap-5 cursor w-[350px] mt-4 md:w-[500px] bg-[#2A2D31] ">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {items.map((item) => (
              <div key={item.id} className="mb-4">
                {item.type === "label" && (
                  <Label formTitle={item.label || ""} />
                )}

                {item.type === "text" && (
                  <FormField
                    name={item.formFieldName}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <FormTextInput
                        value={value}
                        type="text"
                        placeholder={item.label}
                        onChange={onChange}
                        error={errors?.[
                          item.formFieldName
                        ]?.message?.toString()}
                      />
                    )}
                    defaultValue=""
                  />
                )}

                {item.type === "password" && (
                  <FormField
                    name={item.formFieldName}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <FormTextInput
                        type="password"
                        placeholder={item.placeholder}
                        value={value}
                        onChange={onChange}
                        error={errors?.[
                          item.formFieldName
                        ]?.message?.toString()}
                      />
                    )}
                    defaultValue=""
                  />
                )}

                {item.type === "select" && (
                  <FormField
                    name={item.formFieldName}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <SelectInput
                        label={item.label}
                        options={item.options || []}
                        value={value}
                        handleChange={onChange}
                        error={errors?.[
                          item.formFieldName
                        ]?.message?.toString()}
                        placeholder={item.label || ""}
                      />
                    )}
                    defaultValue=""
                  />
                )}

                {item.type === "radio" && (
                  <FormField
                    name={item.formFieldName}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <RadioInput
                        value={value}
                        onChange={onChange}
                        options={item.radioOptions || []}
                        label={item.label}
                        error={errors?.[
                          item.formFieldName
                        ]?.message?.toString()}
                      />
                    )}
                    defaultValue=""
                  />
                )}

                {item.type === "checkbox" && (
                  <FormField
                    name={item.formFieldName}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <FormCheckBox
                        text={item.label}
                        value={typeof value === "boolean" ? value : false}
                        onChange={onChange}
                        error={errors?.[
                          item.formFieldName
                        ]?.message?.toString()}
                      />
                    )}
                    defaultValue={false}
                  />
                )}

                {item.type === "button" && (
                  <div className=" flex justify-center">
                    <FormButton title={item.label || ""} />
                  </div>
                )}
              </div>
            ))}
          </form>
        </Form>

        {successMsgm && <div className=" text-green-600">{successMsgm}</div>}
      </div>
    </div>
  );
};

export default FormPreview;
