# CHIP-8 Rust Emulator Resources

## Knowledge

1. [Guide to making a CHIP 8 emulator by Tobias V. I. Langhoff](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/)
  Primary guide for the machine components, fetch/decode/execute loop, instruction behavior, timing, and known specification quirks.
2. [CHIP 8 Technical Reference by Cowgod](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM)
  Compact historical reference for the memory map, registers, display, timers, and opcode definitions. Compare ambiguous instructions against newer references rather than treating this as infallible.
3. [The Rust Programming Language: Understanding Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)
  Primary Rust reference for ownership, borrowing, slices, and data layout as they apply to emulator state.
4. [Rust standard library documentation](https://doc.rust-lang.org/std/)
  Reference for arrays, `Result`, byte operations, file I/O, and timing primitives used by the implementation.

## Verification

1. [Timendus CHIP 8 test suite](https://github.com/Timendus/chip8-test-suite)
  Practical ROM-based checks for instruction behavior, quirks, display, and flags after the basic interpreter can run ROMs.

## Wisdom (Communities)

1. [r/EmuDev](https://www.reddit.com/r/EmuDev/)
  Moderated community for emulator-development questions and implementation feedback.

## Gaps

1. The repository has not yet chosen a client library or a preferred way to run the desktop, web, or TUI front end. That decision can wait until the core executes instructions.
