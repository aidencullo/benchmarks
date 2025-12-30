// Array operation benchmarks

Deno.bench({
  name: "for loop",
  group: "array iteration",
  baseline: true,
  fn: () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  },
});

Deno.bench({
  name: "forEach",
  group: "array iteration",
  fn: () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    let sum = 0;
    arr.forEach((n) => {
      sum += n;
    });
  },
});

Deno.bench({
  name: "reduce",
  group: "array iteration",
  fn: () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    arr.reduce((sum, n) => sum + n, 0);
  },
});

Deno.bench({
  name: "for...of",
  group: "array iteration",
  fn: () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i);
    let sum = 0;
    for (const n of arr) {
      sum += n;
    }
  },
});
