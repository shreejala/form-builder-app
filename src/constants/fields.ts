import { FieldType } from "@/types/field";

export const fields: FieldType[] = [
  {
    id: "label",
    label: "Label",
    type: "label",
    name: "Label",
    formFieldName: Date.now().toString(),
  },
  {
    id: "text-input",
    name: "Text Input",
    label: "Text Input",
    placeholder: "Text",
    type: "text",
    formFieldType: "text",
    formFieldName: Date.now().toString(),
  },
  {
    id: "password-input",
    label: "Password Input",
    placeholder: "Password",
    type: "password",
    name: "Password Input",
    formFieldType: "password",
    formFieldName: Date.now().toString(),
  },
  {
    id: "select-input",
    label: "Select Input",
    placeholder: "Select",
    type: "select",
    name: "Select Dropdown",
    formFieldType: "select",
    formFieldName: Date.now().toString(),
  },
  {
    id: "radio-input",
    label: "Radio button",
    type: "radio",
    name: "Radio Button",
    formFieldType: "radio",
    formFieldName: Date.now().toString(),
  },
  {
    id: "checkbox",
    label: "Checkbox",
    type: "checkbox",
    name: "Checkbox",
    formFieldType: "checkbox",
    formFieldName: Date.now().toString(),
  },
  {
    id: "button",
    label: "Button",
    type: "button",
    name: "button",
    formFieldName: Date.now().toString(),
  },
];

export const inputType = ["text", "email"];
