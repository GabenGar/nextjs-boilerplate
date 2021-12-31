export interface SchemaProperty {
  type: string,
  format?: string,
  minLength?: number
} 

/**
 * They keys are the property keys and the value is an array of errors.
 */
export class ValidationErrors<E = Error> extends Map<string, E[]> {
  
  addError(key: string, error: E) {
    if (!this.has(key)) {
      this.set(key, [error]);
    } else {
      this.get(key)?.push(error);
    }
  }

  toDict() {
    const errorsDict: Record<string, E[]> = {};

    for (const [key, errors] of Array.from(this.entries())) {
      errorsDict[key] = errors;
    }

    return errorsDict;
  }

  toString() {
    const errorsDict = this.toDict();

    return JSON.stringify(errorsDict);
  }
}

export const accountSchema = {
  title: "Account",
  description: "Account on the resource.",
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
  } as Record<string, SchemaProperty>,
};
