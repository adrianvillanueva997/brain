---
title: Chip 8
---

# Readings

- <http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.2>
- <https://github.com/CaffeineViking/chip-8/blob/master/doc/specification.md>
- <https://aquova.net/emudev/chip8/>

# Introduction

Chip 8 is an interpreted programming language that was originallyt designed to run on the COSMAC VIP and Telmac 1800 computers. It was designed to be basic to program and to be memory efficient.

## Memory

The chip8 memory is capable of accesing up to 4KB (4096) of RAM, from `0x000` (0) to `0x1FF` (511) where the internals are located and should not be used for programs. The reminder, from `0x200` (512) to `0xFFF` (4095) are used for programs.

Most of the programs will start at `0x200` (512).

## Registers

For Chip8 we have to distinguish between `Vx` and `Vi` registers. The register `Vx` contains 16 different registries, x is the hexadecimal number whose value is between 0 and F.
`Vi` register is the last memory status, mostly used to store opcode memory addresses, it is declared as 16 bits but only the first 12 are used.

The CPU contains a 16 bit stack to store coroutines. The stack can only be read/written through `LIFO` (Last in First Out). The stack is not general purpose, used when a subroutine is called, to save return address, and when it returns, to restore it.

The `Stack Pointer` is used to know where the top of the stack is located.

**NOTE:** due to my personal implementation in rust the standard library is not going to be used because the goal is to port this to web assembly.

Another element to take into consideration here is the program counter, it will allow us to know which part of the game we are running now.

## Keyboard

The keyboard only contains 16 entries

### Regular Keyboard

| 1| 2 | 3 | 4 |
| --------------- | --------------- | --------------- | --------------- |
| Q | W | E | R |
| A| S | D | F |
| Z| X | C | V |

### Chip-8

| 1| 2 | 3 | C |
| --------------- | --------------- | --------------- | --------------- |
| 4 | 5 | 6 | D|
| 7| 8 | 9 | E |
| A| 0 | B | F |

## Display

## Timers and sound

## Instructions
