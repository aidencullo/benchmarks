// Async operation benchmarks

Deno.bench("async function call", async () => {
  await Promise.resolve(42);
});

Deno.bench("multiple async operations", async () => {
  await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ]);
});

Deno.bench({
  name: "setTimeout",
  fn: async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  },
});

Deno.bench({
  name: "crypto random UUID",
  fn: () => {
    crypto.randomUUID();
  },
});
