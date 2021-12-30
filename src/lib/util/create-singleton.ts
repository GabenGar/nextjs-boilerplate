export function createSingleton<T>(name: string, create: () => T): T {
  const symbol = Symbol.for(name);
  let scope = (global as any)[symbol];
  if (!scope) {
    scope = { ...create() };
    (global as any)[symbol] = scope;
  }
  return scope;
}
