---
title: "Understanding Turing Complete Type Systems in Rust"
date: "2024-05-15"
description: "A deep dive into how Rust's trait system is inadvertently Turing complete, and what that means for compiler performance and low-level engineering."
tags: ["rust", "compilers", "type-systems"]
---

## Introduction

Rust's type system is famous for being incredibly powerful and expressive. It allows us to encode complex state machines and invariants directly into the types, ensuring that invalid states are unrepresentable at compile time.

But did you know that the Rust trait system is actually **Turing complete**?

## What Does Turing Complete Mean?

In computability theory, a system of data-manipulation rules is said to be Turing-complete if it can be used to simulate any Turing machine. This means it can compute any computable function, given enough time and memory.

### The Implications

When a type system is Turing complete, it means that evaluating types during compilation is equivalent to running an arbitrary program. This can lead to:

1.  **Infinite Compile Times**: You can write a program that causes the compiler to loop infinitely while trying to resolve types.
2.  **Complex Type-Level Programming**: We can perform arbitrary calculations using *only* types, before a single instruction of runtime code is generated.

## The Math Behind It

Let's look at some math. A Turing machine transitions between states:

$$
\delta : Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}
$$

Where:
- $Q$ is a finite, non-empty set of states.
- $\Gamma$ is a finite, non-empty set of the tape alphabet symbols.

In Rust, we represent this using **Traits** and **Associated Types**.

### Encoding Logic with Traits

Here is an example of encoding a simple boolean NOT operation using Rust's type system:

```rust
trait Not {
    type Output;
}

struct True;
struct False;

impl Not for True {
    type Output = False;
}

impl Not for False {
    type Output = True;
}
```

Notice that there are no functions here, no runtime values! Everything is evaluated purely by the compiler.

## Exploring Peano Arithmetic

To prove Turing completeness, we often build Peano arithmetic.

### Defining Numbers

We can define natural numbers at the type level:

```rust
struct Zero;
struct Succ<N>(N);

type One = Succ<Zero>;
type Two = Succ<One>;
```

### Addition

Adding two numbers $A$ and $B$:

$$ A + 0 = A $$
$$ A + S(B) = S(A + B) $$

```rust
trait Add<Rhs> {
    type Output;
}

// A + 0 = A
impl<A> Add<Zero> for A {
    type Output = A;
}

// A + S(B) = S(A + B)
impl<A, B> Add<Succ<B>> for A
where
    A: Add<B>,
{
    type Output = Succ<<A as Add<B>>::Output>;
}
```

## Conclusion

Understanding these boundaries helps us write better, more performant Rust code. While we shouldn't build web servers in the trait solver, the ability to encode complex invariants is what makes Rust so robust for low-level systems programming!