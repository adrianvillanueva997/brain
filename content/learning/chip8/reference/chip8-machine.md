---
title: CHIP-8 Machine Reference
type: concept
status: growing
tags:
  - chip8
  - emulation
---

# CHIP-8 Machine Reference

CHIP-8 is a small interpreted programming environment. A program is a sequence of 2-byte instructions that operates on memory, registers, a stack, timers, a keypad, and a monochrome display.

## State

| Component | Size | Role |
| --- | ---: | --- |
| Memory | 4096 bytes | Addresses `0x000` through `0xFFF` |
| `V0`–`VF` | 16 × 8 bits | General-purpose registers; `VF` is also a flag |
| `I` | 16 bits | Index/address register |
| `PC` | 16 bits | Address of the next instruction; normally starts at `0x200` |
| Stack | commonly 16 × 16 bits | Return addresses for subroutines |
| Delay timer | 8 bits | Decrements toward zero at 60 Hz |
| Sound timer | 8 bits | Decrements at 60 Hz and beeps while nonzero |
| Display | 64 × 32 pixels | Monochrome boolean pixels |
| Keypad | 16 keys | Hexadecimal keys `0` through `F` |

## Memory map

1. `0x000`–`0x1FF`: reserved interpreter area; the built in font commonly lives here.
2. `0x200`–`0xFFF`: program and data area for most ROMs.
3. Instructions are stored most significant byte first, so two bytes must be combined to form one opcode.

## Fetch/decode/execute

1. Fetch two bytes at `PC`.
2. Combine them into a 16-bit opcode: `(high << 8) | low`.
3. Advance `PC` by 2 before executing.
4. Decode fields such as `X`, `Y`, `N`, `NN`, and `NNN`.
5. Execute the instruction, changing machine state.

## Opcode fields

For `0xABCD`:

| Field | Value | Meaning |
| --- | ---: | --- |
| First nibble | `A` | Broad instruction family |
| `X` | `B` | Register index |
| `Y` | `C` | Register index |
| `N` | `D` | 4-bit operand |
| `NN` | `0xCD` | 8-bit immediate |
| `NNN` | `0xBCD` | 12-bit address |

See [[../lessons/0001-machine-model-and-fetch|Lesson 01 — The machine model and fetch]] for the first worked trace.
