import { parseISO, formatISO } from "date-fns";

export function fromISOString(dateString: string): Date {
  return parseISO(dateString);
}

export function toISOString(date: Date): string {
  return formatISO(date);
}

export function isISOString(dateString: string) {
  try {
    parseISO(dateString);
    return true;
  } catch (error) {
    return false;
  }
}
