# Deno Benchmarks

A collection of benchmark tests demonstrating Deno's built-in benchmarking capabilities.

## Running Benchmarks

```sh
# Add Deno to PATH if not already done
export PATH="$HOME/.deno/bin:$PATH"

# Run all benchmarks
deno bench

# Run specific benchmark file
deno bench basic_bench.ts

# Run benchmarks matching a pattern
deno bench --filter "array"

# Output as JSON
deno bench --json
```

## Benchmark Files

- `basic_bench.ts` - Basic string operation benchmarks
- `array_bench.ts` - Array iteration comparisons with baseline and grouping
- `async_bench.ts` - Async operation benchmarks

## Features Demonstrated

- Basic benchmarking with `Deno.bench()`
- Benchmark groups for comparison
- Baseline benchmarks
- Async benchmarks
- Performance comparison of common operations
