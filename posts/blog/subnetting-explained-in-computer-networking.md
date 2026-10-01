---
title: "Subnetting explained in Computer Networking"
date: "2026-09-28"
description: "Why subnetting is a crucial aspect in networking."
tag: "Networking"
mins: "7"
finished: false
last_updated_date: "2026-09-28"
filter: "Networking"
---

## Subnetting explained in Computer Networking

If you're in the networking field, or you're currently on your journey to becoming a Network Engineer, you've definitely come across the term **subnetting**. But what actually is it? That's what I'll be explaining in this blog. To be honest, subnetting confused me when I first learned it, but after some practice it's now something I find pretty easy, so if you're struggling with it right now, don't worry. I'll do my best to break it down in a way that actually makes sense.

Note: You do need a basic understanding of binary to fully grasp subnetting.

### So what is Subnetting?

Subnetting is the process of splitting a larger Internet Protocol (IP) network into smaller networks, which are called **subnets**. Makes sense, right? So what does that look like in practice?

Well, before answering that, we need to look at the structure of a typical IP address. Let's use this one as an example:

192.168.1.0
[size=extralarge]

What does each number between the dots (`.`) mean? Each one represents an **octet**, which is exactly **8 bits** in length. An IPv4 address is always made up of 4 octets, so every IPv4 address is **32 bits** long in total (8 bits x 4 octets), which is the same as 4 bytes. With that out of the way, here's how you'll usually see this IP address written:

192.168.1.0/24
[size=extralarge]

Now I know what you're thinking: what the hell is that `/24`? Well, that's exactly what the next section covers.

---

### The Network & Host Portion

Every IP address is split into two parts: the **network portion** and the **host portion**. So what exactly does that mean?

#### Network Portion

The network portion identifies which network a device belongs to.

#### Host Portion

The host portion identifies a specific device on that network.

So the `/24` tells us that the first **24 bits** of the IP address make up the **network portion**. That leaves the remaining **8 bits** (32 - 24 = 8) for the **host portion**.

In our example, that means the first 3 octets (3 octets x 8 bits = 24 bits) make up the network portion:

192.168.1
[size=extralarge]

And the last octet is the host portion:

0
[size=extralarge]

Like I mentioned earlier, the host portion identifies a specific device on a network. But you might be wondering how many devices the host portion can actually support. Well, that's easy to work out, because there's a simple formula for it:

2^n-2
[size=extralarge]

`n` represents the number of host bits. Host bits?? It's just a zero! Well, to make sense of this, let's convert the IP address into binary.

11000000 10101000 00000001 00000000
[size=extralarge]
[caption=The binary representation of the IP address 192.168.1.0]

To make it easier to visualize, I'm going to highlight the network and host portion to make the distinction clear.

11000000 10101000 00000001 00000000
[caption=The binary representation of the IP address 192.168.1.0 with clear visual distinctions.]
[size=extralarge]
[chars=0-25,color=red]
[chars=27-end,color=blue]

The red represents the **network portion** and the blue represents the **host portion**. So even though the host portion is just a `0` in decimal, in binary it's made up of 8 bits, and those are our **host bits**. Now let's go back to that formula from earlier, 2^n-2. We know `n` is the _number of host bits_, but why do we subtract 2? That's because every network reserves 2 addresses that can't be given to devices: the **network address** and the **broadcast address**.

Note: The **network address** is the first address in a network and identifies the network itself. The **broadcast address** is the last address, and it's used to send traffic to every device on the network at once.

Now, to answer our original question: how many devices can the host portion support? We have **8 host bits**, so let's plug 8 in as `n`:

2^8-2=254
[size=extralarge]

And there's our answer: the `192.168.1.0/24` network can support up to **254 devices**. That's 256 addresses in total, minus the network address (`192.168.1.0`) and the broadcast address (`192.168.1.255`), which leaves `192.168.1.1` to `192.168.1.254` for our devices.

---

### The problem
