// Basic benchmarking examples

Deno.bench("string concatenation", () => {
  let result = "";
  for (let i = 0; i < 1000; i++) {
    result += "x";
  }
});

Deno.bench("array join", () => {
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push("x");
  }
  arr.join("");
});

Deno.bench("template literals", () => {
  let result = "";
  for (let i = 0; i < 1000; i++) {
    result = `${result}x`;
  }
});
