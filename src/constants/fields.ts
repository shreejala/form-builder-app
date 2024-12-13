import { FieldType } from "@/types/field";

export const fields: FieldType[] = [
  {
    id: "label",
    label: "Label",
    type: "label",
    name: "Label",
    formFieldName: JSON.stringify(Date.now()),
  },
  {
    id: "text-input",
    name: "Text Input",
    label: "Text Input",
    placeholder: "Text",
    type: "text",
    formFieldType: "text",
    formFieldName: JSON.stringify(Date.now()),
  },
  {
    id: "password-input",
    label: "Password Input",
    placeholder: "Password",
    type: "password",
    name: "Password Input",
    formFieldType: "password",
    formFieldName: JSON.stringify(Date.now()),
  },
  {
    id: "select-input",
    label: "Select Input",
    placeholder: "Select",
    type: "select",
    name: "Select Dropdown",
    formFieldType: "select",
    formFieldName: JSON.stringify(Date.now()),
  },
  {
    id: "radio-input",
    label: "Radio button",
    type: "radio",
    name: "Radio Button",
    formFieldType: "radio",
    formFieldName: JSON.stringify(Date.now()),
  },
  {
    id: "checkbox",
    label: "Checkbox",
    type: "checkbox",
    name: "Checkbox",
    formFieldType: "checkbox",
    formFieldName: JSON.stringify(Date.now()),
  },
  {
    id: "button",
    label: "Button",
    type: "button",
    name: "button",
    formFieldName: JSON.stringify(Date.now()),
  },
];

export const inputType = ["text", "email"];
