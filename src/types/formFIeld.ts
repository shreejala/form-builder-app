export interface FormFieldType {
  id: number;
  type: string;
  label?: string;
  name: string;
  placeholder: string;
  options?: string[];
  formFieldType?: string;
  formFieldName:string;
  radioOptions?: string[];
}

export interface FormFieldUpdateType {
  label?: string;
  placeholder?: string;
  options?: string[];
  formFieldType?: string;
  formFieldName:string;
  radioOptions?: string[];
}
