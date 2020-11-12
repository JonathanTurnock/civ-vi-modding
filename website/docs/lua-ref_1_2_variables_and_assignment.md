---
id: lua-ref-variables-and-assignment
title: Variables & Assignment
sidebar_label: Variables & Assignment
slug: /lua-reference/variables-and-assignment
---

:::tip
[Variables](https://www.w3schools.com/js/js_variables.asp) and
[Assignments](https://www.w3schools.com/js/js_assignment.asp) are very generic
 terms in programming, if they are not familiar I recommend checking some resources.

 Don't overcomplicate things though, **variables** are names, **assignment** is the act of point at
  things with those names.
:::

In Lua we have two types of Variables, Global and Local

## Global

Global Variables are declared with a simple assignment statement, no keywords needed.

```lua
helloWorldMessage = "Hello World"
print(helloWorldMessage) -->> Hello World
```

It is also possible to just reference them without declaration, but you get a `nil` return value

```lua
print(nothingHere) -->> nil
```

You can also assign `nil` to a variable which has the effect of deleting the value via de-reference.

De-referenced values are cleaned up by the automatic memory management provided by Lua.

```lua
helloWorldMessage = "Hello World"
print(helloWorldMessage) -->> Hello World

helloWorldMessage = nil
print(helloWorldMessage) -->> nil
```

To give an example of this in action lets create two files.

First we create a file with 1 Global variable `PI` with the value of `3.14159` assigned to it
```lua
--- constants.lua
PI = 3.14159
```

If we try to reference it we cannot, we will get `nil` as a result, however once we reference it
 after
 the `constants.lua` is imported it works as expected.

```lua
---printPi.lua
-- Reference Before Import
print(PI) -->> nil

-- Import Constants
dofile("constants.lua")

-- Reference after import
print(PI) -->> 3.14159
```

## Local

Local variables are declared using the `local` key word
```lua
local halfPi = PI/2
print(halfPi)
```

Local variables are slightly different to global in that they are only accessible from within the
 [scope](#a-note-on-scope).

We will bring our two files back but let's add local before the variable `PI` and a print
 statement after its declaration.

```lua
--- constants.lua
local PI = 3.14159
print(PI) -->> 3.14159
```

When we now try and access the variable `PI` after the import we still get a `nil` value
```lua
---printPi.lua
-- Reference Before Import
print(PI) -->> nil

-- Import Constants
dofile("constants.lua")

-- Reference after import
print(PI) -->> nil
```

This is because local variable is not accessible outside the file.

If we run this program we get the following output in the console, the first print comes from the
 `printPi.lua` at line 3, the second comes from `constants.lua` at line 2, the third comes from
  `printPi.lua` at line 9
```lua
lua.exe helloWorld.lua
nil
3.14159
nil
```

## A Note on Scope
*Scope is quite a complex topic, but it's critical to understand at least the fundamental concept
 before declaring a single variable.*

At its core something is scoped when it exists only for a specific block of code.

The first scope you encounter is the file itself. Then any functions/control structures (for
 loops etc)

Consider this example
```lua
--<< Top Level Scope Starts
print(pi) -->> nil
print(localPi) -->> nil

function definePI() --<< Function Scope Starts
    pi = 3.14
    local localPi = 3.14
    print(pi) -->> 3.14
    print(localPi) -->> 3.14
end --<< Function Scope Ends

definePI()
print(pi) -->> 3.14
print(localPi) -->> nil
--<< Top Level Scope Ends
```

The variable `localPi` is limited to the scope of the function `definePi`, when we leave the function
 the variable no longer exists and is not accessible, it is said to be scoped, the Variable `pi`
 however is **NOT** and we can access it after calling the function.

:::warning
It may not be obvious but there is a glaring issue here, often languages when defining a variable
 like we do with `pi = 3.14` limit this to only be accessible inside the function, meaning in
  large scripts you don't get random collisions, that's not the case here, if for example we had
   defined pi as `3.14159` at the start, then it was replaced inside a function by accident to `3.14`
   we have just lost a lot of precision!

   **LESSON: USE `local` VARIABLES UNLESS YOU EXPLICITLY WANT `global` ONES**
:::

## References
- [Programming in Lua - 1.1 Chunks](https://www.lua.org/pil/1.1.html)
- [Programming in Lua - 1.2 Global Variables](https://www.lua.org/pil/1.2.html)
- [Programming in Lua - 4.2 Local Variables and Blocks](https://www.lua.org/pil/4.2.html)
