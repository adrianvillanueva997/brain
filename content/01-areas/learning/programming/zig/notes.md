The notes written here come from [[technical/zig/useful links]]

# Building system

Unlike other low-level programing languages like C or C++, Zig does not require of a building toolchain, it is embedded in the compiler.
It provides multiple building commands:

* ```zig build-exe```→ Compiles an executable file
* ```zig build-lib```→ Compiles a library
* ```zig build run``` → Compile and run the project

# Variables

* Two kind of variables, var and const
* Variables must always have a value, it is possible to define them as ```undefined```

```zig
var age: u8 = 24;
```

* Like in Go, variables must be used otherwise it will not compile
* It is possible to discard a value of an object:

```zig
const age = 15;
_ = age

std.debug.print("{d}/n", .{age + 2});
```

The above doe should fail:

```text
t.zig:7:5: error: pointless discard of local constant
```

* If a variable is declared with var and not mutated later, the compiler will complain, so for not mutable variables, it is better to just use const

## Types of variables

The primitive types can be found [here](https://ziglang.org/documentation/master/#Primitive-Types):

## Arrays

Start at 0
There are two ways to declare an array:

1. Traditionally declaring the size of the array:

```zig
const ns = [4]u8{1,2,3,4};
```

2. Using ```_``` This will tell the compiler to count the elements for us during compilation time

```zig
const ns = [_]u8{1,2,3,4};
```
