import { JSONSchema, SchemaProperty } from "#lib/json-schema/types";


export const accountSchema: JSONSchema = {
  title: "Account",
  description: "Account on the resource.",
  type: "object",
  required: ["id", "created_at", "name", "password"],
  properties: {
    id: {
      type: "integer",
    },
    created_at: {
      type: "string",
      format: "date-time",
    },
    updated_at: {
      type: "string",
      format: "date-time",
    },
    name: {
      type: "string",
      minLength: 5,
    },
    password: {
      type: "string",
      minLength: 8,
    },
    email: {
      type: "string",
      format: "email",
    },
    role: {
      type: "string",
    },
  },
};
