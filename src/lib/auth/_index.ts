import type { Adapter } from "next-auth/adapters";

function MyAdapter(): Adapter {
  // @ts-expect-error
  return {};
}
