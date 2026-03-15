---
title: Chip 8  
---

# Introduction

Chip 8 is an interpreted programming language that runs on a 1802 microprocessor. It was designed to be basic to program and to be memory efficient.

## Memory

The chip8 memory is capable of accesing up to 4KB (4096) of RAM, from `0x000` (0) to `0x1FF` (511) where the internals are located and should not be used for programs. The reminder, from `0x200` (512) to `0xFFF` (4091) are used for programs.

Most of the programs will start at `0x200` (512).

## Registers

For Chip8 we have to distinguish between `Vx` and `Vi` registers. The register `Vx` contains 16 different registries, x is the hexadecimal number whose value is between 0 and F.  
`Vi` register is the last memory status, it is declared as 16 bits but only the first 12 are used.

The CPU contains a 16 bit stack to store coroutines. The stack can only be read/written through `LIFO` (Last in First Out). The stack is not general purpose, its only allowed to use when a coroutine ends.

Since the emulator is being built in Rust and it needs to be flexible enough to be ported to web assembly, the standard library cannot be used. The `Stack Pointer` is used to know where the top of the stack is located.

## Keyboard

## Display

## Timers and sound

## Instructions
