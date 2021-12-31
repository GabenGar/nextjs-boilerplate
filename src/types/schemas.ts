export interface SchemaProperty {
  type: string;
  format?: string;
  minLength?: number;
}

/**
 * The map of property keys and their related errors.
 */
export class ValidationErrors extends Map<string, Error[]> {
  /**
   * Combine errors from another `ValidationErrors` instance.
   * @param errorMap
   */
  mergeErrors(errorMap: ValidationErrors) {
    for (const [key, errors] of Array.from(errorMap.entries())) {
      if (this.has(key)) {
        const originalErrors = Array.from(this.get(key)!);
        this.set(key, [...originalErrors, ...errors]);
      } else {
        this.set(key, errors);
      }
    }

    return this;
  }

  /**
   * Adds an error to the error map.
   * @param key
   * @param error
   */
  addError(key: string, error: Error) {
    if (!this.has(key)) {
      this.set(key, [error]);
    } else {
      this.get(key)!.push(error);
    }

    return this;
  }

  toDict() {
    const errorsDict: Record<string, Error[]> = {};

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
