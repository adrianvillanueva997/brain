# Mission: Build and Understand a CHIP-8 Emulator in Rust

## Why

Build a working CHIP-8 interpreter in Rust while understanding how its memory, CPU state, instructions, display, input, and timers cooperate. The emulator is the concrete project; the deeper goal is to use it as a small, understandable path into systems programming and emulation.

## Success looks like

1. Explain the CHIP 8 machine model and trace an instruction through fetch, decode, and execute.
2. Implement the core emulator incrementally in the existing Rust workspace.
3. Run a CHIP 8 ROM and use tests or debugging output to explain failures.
4. Explain the important historical quirks instead of treating the specification as one perfectly consistent document.

## Constraints

1. Use the existing Rust emulator project as the implementation workspace.
2. Prefer small lessons and working code over broad theory.
3. Keep the core independent from a specific client where practical.

## Out of scope

1. SUPER CHIP and XO CHIP extensions until the original CHIP 8 implementation works.
2. Building a general purpose emulator framework.
3. Optimizing before correctness and understanding are established.
