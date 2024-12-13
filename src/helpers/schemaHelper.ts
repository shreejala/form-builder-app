import { emailRegexp, passwordRegex } from "@/constants/regex";
import { z, ZodObject } from "zod";

export type FieldConfig = {
  name: string;
  type: string;
};

const createSchema = (fields: FieldConfig[]): ZodObject<any> => {
  const schemaShape: Record<string, any> = {};

  fields.forEach((field) => {
    let schema;

    if (field.type === "email") {
      schema = z.string().min(1, { message: "Required" }).regex(emailRegexp, {
        message: "The email address you provided is invalid.",
      });
    }

    if (field.type === "password") {
      schema = z.string().min(1, { message: "Required" }).regex(passwordRegex, {
        message:
          "Password must contain at least 8 characters, one uppercase, one smallcase, one number and one special character.",
      });
    }

    if (field.type === "text") {
      schema = z.string().min(1, { message: "Required." });
    }

    if (field.type === "checkbox") {
      schema = z.boolean().refine((val) => val === true, {
        message: "Please check the condition.",
      });
    }

    if (field.type === "radio") {
      schema = z.string().refine((val) => val !== "", {
        message: "Required.",
      });
    }

    if (field.type === "select") {
      schema = z.string().refine((val) => val !== "", {
        message: "Required",
      });
    }
    schemaShape[field.name] = schema;
  });

  return z.object(schemaShape);
};

export default createSchema;
