---
title: "The stack and the heap explained"
date: "2022-10-31"
description: "An overall explanation on the stack and the heap."
tag: "Technical"
finished: true
mins: "8"
last_updated_date: "2022-10-31"
---

## The stack and the heap explained

Let's start of by explaining what exactly the stack and heap is. In computer science both the stack and the heap are memory locations allocated from the underlying operating system.

### The Stack

The stack is a data structure where data of fixed size gets stored, inside the stack values get stored in the order it gets them and removes the values in the opposite order. You can think of the stack as a pile of books, when a value gets pushed onto the stack think of adding a new book on top of pile of books you already have, when you need to get a book, you take one off the top.

### The Heap

The heap is another data structure where data is stored but the heap is less organized compared to the stack. One main difference between the stack and the heap is that the heap isn't managed by the [CPU](https://en.wikipedia.org/wiki/Central_processing_unit). Data with a dynamic size are typically stored on the heap, when data is stored on the heap the [memory allocator](https://en.wikipedia.org/wiki/Memory_management) finds an empty spot in the heap that is big enough, marks it as being in use, and the returns a pointer which points to the address of the location.

### Important

Something important to note about the stack and the heap is that accessing data on the heap is slower than accessing data on the stack, the reason for this is because when accessing data on the heap you have to follow a pointer to get the data.

Here's an analogy from the [rust book](https://doc.rust-lang.org/book/).

> Consider a server at a restaurant taking orders from many tables. It’s most efficient to get all the orders at one table before moving on to the next table. Taking an order from table A, then an order from table B, then one from A again, and then one from B again would be a much slower process.

source: [doc.rust-lang.org](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap)

Here's a diagram:

![](/post/stack-and-heap-explained/stack_and_heap.png)
source: [vikashazrati.wordpress.com](https://vikashazrati.wordpress.com/2007/10/01/quicktip-java-basics-stack-and-heap/)

### Examples with code

Note I'll be showing the following examples in rust but feel free to use your language of choice.

---

#### Create a project

If you're following along with rust then run the following command in your terminal:

```
$ cargo new stack_and_heap_example
```

#### Navigate and open your project

Once you've created the project navigate to the directory and open it when your favorite editor of choice.

```
$ cd new stack_and_heap_example/
```

```
$ code .
```

Once you've navigated and opened the directory, create a simple program that contains a single variable and assign it an integer value, you can pick any integer value of your choice.

In my case I've created a variable and named it `x` and assigned the value `5` which is an `i32` integer type.

```rs
fn main() {
    let x: i32 = 5;
}
```

When we create the variable `x` it gets pushed onto the stack. When the `main` runs, the allocator allocates a single 32-bit integer for our stack frame.

```
[Address] [Name] [Value]
[0]       [x]    [5]
```

When the `main` function exits, `x` gets popped off the stack.

#### Heap example

Delete the `x` variable declaration and copy the following example.

```rs
fn main() {
    let name: String = String::from("Nicholas");
}
```

If you're familiar with [Rust](https://www.rust-lang.org/) then this should be familiar to you. If not, essentially we're creating a String using the [String](https://doc.rust-lang.org/std/string/struct.String.html) type and calling the [from](https://doc.rust-lang.org/std/convert/trait.From.html#tymethod.from) method to gives us a string.

It's important to know that the [String]() type can mutate during runtime, so the allocator doesn't know how much memory to allocate it at compile that. Since the [String]() can be a growable piece of text, the allocator allocates memory on the heap which unknown at compile time.
