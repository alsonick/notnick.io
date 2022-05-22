---
title: "Learning Rust Chapter 1 Summary 🦀"
date: "2022-05-22"
description: "Everything I've learnt in chapter 1."
mins: "8"
---

## The Rust Programming Language

This page is going to be a collection of all the topics I've learnt whiles going through [The Rust Programming Language Book](https://doc.rust-lang.org/book/). These notes are mainly a reference so I can look back on certain topics but anyone can use it to learn Rust.

---

### Introduction

If you're completely new to Rust then I'd recommend reading the official [introduction](https://doc.rust-lang.org/book/ch00-00-introduction.html) to Rust to get an idea about what exactly Rust is and who Rust is for.

#### Who Rust is for

- Teams of Developers
- Students
- Companies
- Open Source Developers
- People Who Value Speed and Stability

#### What is Rust used for

- Embedded Systems
- WebAssembly
- CLI Tools
- Web Servers

---

### Chapter 1

This chapter mostly covers the installation process so I'd recommend you follow their [guide](https://doc.rust-lang.org/book/ch01-01-installation.html) on how to install Rust on your system.

First create a new directory to run your Rust code, you can call this directory anything you want, after you've done that open the directory using your favourite code editor, in my case that'd be [Visual Studio Code](https://code.visualstudio.com/).

```
$ mkdir learning
$ cd learning
$ code .
```

Once you've done that create a file and call it `main.rs`. Enter the following code below:

```rs
func main() {
    println!("Hello, World!");
}
```

We define the `main` function and call the `println!` macro

To compile and run your code enter the following:

```
$ rustc main.rs
$ ./main
Hello, World!
```

Running the `rustc` command compiles our code and outputs a binary executable that we can use.
To View the binary executable you can use the `ls` command in your shell.

```
$ ls
main main.rs
```

#### Important

- Every rust program needs the `main` function: it's always the first code that runs in every Rust program.
- `println!` is a Rust macro, not a function. [Click here to read about Macros](https://doc.rust-lang.org/book/ch19-06-macros.html)
- Every expression must end with a semicolon `;`.
- Use the `rustc` command to compile your Rust program.

### Cargo

Cargo is the official package manager for Rust, kinda like [NPM](https://www.npmjs.com/) for JavaScript projects.

#### Use case

- Used to download and compile the dependencies your project depends on.

#### Create a Project with Cargo

To create a brand new rust project enter the following:

```
$ cargo new <project_name>
$ cd <project_name>
```

> ##### This will also initialize a new Git repository.

After you've created your rust project open the `Cargo.toml` file. It should look something like this:

```toml
[package]
name = "learning"
version = "0.1.0"
edition = "2021"

[dependencies]
```

This file contains metadata such as name, version, and dependencies for packages, which are call "crates" in Rust.

### Running your project

In order to run our project we first need to build it, to build your project run the following command in your shell:

```
$ cargo build
Compiling learning v0.1.0 (/Users/nick/Desktop/dev/rust/learning)
  Finished dev [unoptimized + debuginfo] target(s) in 0.35s
```

This will create an executable file in `target/debug/learning`.

To run the executable enter the following:

```
$ ./target/debug/learning
```

You should see the following output:

```
Hello, World!
```

Rust also has a `cargo run` command which will both compile and run the resulting executable all in one command:

```
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.01s
     Running `target/debug/learning`
Hello World!
```
