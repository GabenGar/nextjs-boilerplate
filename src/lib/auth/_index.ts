import type { Adapter } from "next-auth/adapters";

function MyAdapter(client, options = {}): Adapter {
  // @ts-expect-error
  return {};
}
