---
title: "01 — The Machine Model and Fetch"
type: study
status: growing
tags:
  - chip8
  - rust
  - emulation
---

# 01 — The Machine Model and Fetch

**Win:** explain exactly how the emulator turns two bytes in memory into one instruction.

## The small machine

The interpreter is not a mysterious game engine. It is a state transition:

```text
old machine state + one opcode -> new machine state
```

The state is summarized in [[../reference/chip8-machine|the machine reference]]. For this lesson, keep only three facts in working memory:

1. Memory is 4096 bytes.
2. Most programs begin at address `0x200`.
3. Every ordinary instruction is exactly two bytes.

These facts are documented in [Langhoff's emulator guide](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/#memory) and the [CHIP-8 Technical Reference](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.1).

## Fetch one opcode

Suppose memory contains:

```text
address 0x200: 0x61
address 0x201: 0x2A
```

Fetch both bytes and place the first byte in the high half:

```text
opcode = (0x61 << 8) | 0x2A
       = 0x612A
```

`0x612A` means “set register `V1` to `0x2A`.” The first nibble, `6`, identifies the instruction family; `1` identifies the register; `2A` is the immediate value.

After fetching, `PC` advances from `0x200` to `0x202`. Advancing during fetch gives every instruction a consistent starting point. A jump can then replace `PC`, and a skip can add another 2.

## Rust connection

In the emulator repository, `Memory` owns the byte array and `Cpu` owns the program counter and registers. The eventual `step` operation will need access to both, so ownership and borrowing matter. The [Rust Book's ownership chapter](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html) is the primary reference when that boundary becomes concrete.

## Retrieval check

Answer without looking back:

1. If `PC = 0x300`, where are the two bytes of the next instruction?
2. What opcode do bytes `0xA2` and `0xF0` form?
3. After fetching, what should happen to `PC` before execution?
4. In opcode `0x6B7C`, which register is written and what value is written?

Then ask the teacher to check your answers. Do not create a learning record until you can use the rule on a new example.

## Next

Continue with the next lesson after the core repository has a tested fetch operation. Until then, inspect the existing [[../reference/chip8-machine|machine reference]] and ask follow-up questions about anything unclear.
