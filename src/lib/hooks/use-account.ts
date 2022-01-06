import useSWR from "swr";
import { getAccount } from "#lib/api/site";

export function useAccount() {
  const { data: account, error } = useSWR("/account", getAccount);

  return {
    account,
    isLoading: !error && !account,
    isError: error,
  };
}
