import { apiV1Fetch } from "./fetch";
import type { APIResponse } from "#types/api";
import type { AccCreds } from "#types/entities";

export async function registerAccount(accCreds: AccCreds) {
  try {
    const response = await apiV1Fetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({ data: accCreds }),
    });
    const result: APIResponse<{ success: boolean }> = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
