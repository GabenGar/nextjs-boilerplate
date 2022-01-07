import { apiV1Fetch } from "./fetch";

import type { APIResponse } from "#types/api";
import type { AccCreds, AccountClient } from "#types/entities";

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

export async function loginAccount(accCreds: AccCreds) {
  try {
    const response = await apiV1Fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ data: accCreds }),
    });
    const result: APIResponse<{ account: AccountClient }> =
      await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export async function getAccount(
  key: string = "/account"
): Promise<APIResponse<AccountClient> | undefined> {
  try {
    const response = await apiV1Fetch(key, {
      method: "POST",
    });

    if (response.status === 401) {
      throw Error("Not authorized.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
