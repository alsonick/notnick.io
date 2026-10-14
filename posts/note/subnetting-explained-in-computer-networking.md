---
title: "Subnetting explained in Computer Networking"
date: "2026-10-02"
description: "Learn how subnetting works by splitting a real network into subnets, step by step."
tag: "Networking"
mins: "8"
finished: true
last_updated_date: "2026-10-2"
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

To see what problems come up when a network isn't split into subnets, let's look at the example network topology below:

![](/post/subnetting-explained-in-computer-networking/network-topology.png)

In the topology we have two separate Local Area Networks (LANs), LAN1 and LAN2. Each LAN has its own router, and the two routers are connected to each other, which links the LANs together. Within each LAN, a switch is connected to the router, and the end hosts (the PCs) are connected to the switch.

Let's say LAN1 is given the network `192.168.1.0/24` and LAN2 is given `192.168.2.0/24`. That gives each LAN 254 usable addresses, but each one only needs 3 of them: 2 for the PCs and 1 for the router, which acts as the default gateway. That leaves **251 addresses** in each LAN going unused, or **502 wasted addresses** across both!

Note: A **default gateway** is the device (usually a router) that hosts send their traffic to whenever it's meant for a different network. The gateway then forwards that traffic on towards its destination.

So how do we fix this? This is where subnetting comes in. Instead of giving each LAN its own `/24`, we can take a single network, `192.168.1.0/24`, and split it into smaller **subnets**, each with only as many addresses as a LAN actually needs.

---

### Subnetting

Before we split the network into subnets, we need to understand the **broadcast domains** in our topology.

Note: From Wikipedia: A broadcast domain is a logical division of a computer network, in which all nodes can reach each other by broadcast at the data link layer.
[caption=https://en.wikipedia.org/wiki/Broadcast_domain]

Here's the same topology again, but this time with each broadcast domain highlighted:

![](/post/subnetting-explained-in-computer-networking/network-topology-broadcast-domains.png)

There are three broadcast domains in the topology: one for LAN1 (pink), one for LAN2 (yellow), and one for the link between the two routers (blue). That router-to-router link is known as a **point-to-point** connection, since it only ever connects two devices. Each broadcast domain needs its own subnet, so we'll need **3 subnets** in total.

#### LAN1

Let's start with LAN1. First, let's bring back the binary representation of `192.168.1.0/24`:

11000000 10101000 00000001 00000000
[size=extralarge]
[chars=0-25,color=red]
[chars=27-end,color=blue]

To split this network, we'll have to **borrow** some of the host bits and turn them into network bits. We can't borrow from the network portion, because those bits identify the network we've been given (`192.168.1`), and changing them would give us a completely different network.

I've already done the math, and we're going to need a `/29` subnet for both LAN1 and LAN2. But why `/29`, and how did I come up with that? Well, first let's look at what `/29` means. What's the difference between 29 and 24? It's 5, so we've borrowed **5 bits** from the host portion. But that still doesn't explain why we picked 29. To see why, let's look at the binary representation of `192.168.1.0` again, this time with the borrowed bits highlighted:

11000000 10101000 00000001 00000000
[size=extralarge]
[chars=0-25,color=red]
[chars=27-31,color=green]
[chars=32-end,color=blue]

The green bits are the 5 we've borrowed, which leaves us with just **3 host bits** (blue). Now let's plug that into our formula from earlier to see how many usable addresses that gives LAN1:

2^3-2=6
[size=extralarge]

Remember, we subtract 2 because the first and last addresses are reserved for the network and broadcast addresses. So technically this subnet gives us 8 addresses (2^3), but only 6 of them can actually be used. That means LAN1's subnet will be:

192.168.1.0/29
[size=extralarge]

Here's what LAN1 looks like with its new subnet:

![](/post/subnetting-explained-in-computer-networking/lan1.png)

| Device  | IP Address  | Role              |
| ------- | ----------- | ----------------- |
| -       | 192.168.1.0 | Network address   |
| Router1 | 192.168.1.6 | Default gateway   |
| PC0     | 192.168.1.1 | End host          |
| PC1     | 192.168.1.2 | End host          |
| -       | 192.168.1.7 | Broadcast address |

Note: This subnet gives us 8 addresses in total (including the network and broadcast addresses), and we're using 5 of them, which leaves 3 spare (`192.168.1.3` to `192.168.1.5`). That's completely fine! Subnets always come in powers of 2, so you'll rarely be able to fit the exact number of hosts you need. If anything, those spare addresses give us some breathing room in case we want to add a few more devices later.

---

#### LAN2

Since LAN2 has the same number of devices as LAN1, it can use the same `/29` prefix. First, we need to find its network address. LAN1 has already taken the addresses from `192.168.1.0` to `192.168.1.7`, so LAN2's network address is simply the next address after LAN1's broadcast address: `192.168.1.8`. Great, that's our network address sorted, but we still need to find the broadcast address.

To find the broadcast address, we need to set all the host bits to 1. So let's look at `192.168.1.8` in binary:

11000000 10101000 00000001 00001000
[size=extralarge]
[chars=0-25,color=red]
[chars=27-31,color=green]
[chars=32-end,color=blue]

The host bits are the ones in blue, so let's set them all to 1:

11000000 10101000 00000001 00001111
[size=extralarge]
[chars=0-25,color=red]
[chars=27-31,color=green]
[chars=32-end,color=blue]

The first 3 octets haven't changed, so we only need to focus on the last one, which is now:

00001111
[size=extralarge]
[chars=0-4,color=green]
[chars=5-end,color=blue]

Converting `00001111` to decimal gives us **15** (8 + 4 + 2 + 1), so LAN2's broadcast address is `192.168.1.15`.

Now that we have both the network and broadcast addresses, everything in between (`192.168.1.9` to `192.168.1.14`) can be used for the devices in LAN2.

Here's what LAN2 looks like with its new subnet:

![](/post/subnetting-explained-in-computer-networking/lan2.png)

| Device  | IP Address   | Role              |
| ------- | ------------ | ----------------- |
| -       | 192.168.1.8  | Network address   |
| Router0 | 192.168.1.14 | Default gateway   |
| PC2     | 192.168.1.9  | End host          |
| PC3     | 192.168.1.10 | End host          |
| -       | 192.168.1.15 | Broadcast address |

---

#### Point-to-Point

We have one more broadcast domain to cover: the link between the two routers. This point-to-point connection is different from the LANs because there are no PCs or switches on it, just the two routers, each connected by one of its interfaces. Since we only need 2 usable addresses (one for each router), we're going to use a `/30` prefix for this subnet. That means borrowing 6 bits from the original host portion (30 - 24), one more than the `/29`s we used for the LANs, which leaves us with just **2 host bits**.

Now that we know the size of the subnet, let's find its network address. Just like with LAN2, we start from the next address after the previous subnet's broadcast address. LAN2's broadcast address was `192.168.1.15`, so this subnet's network address is `192.168.1.16`:

192.168.1.16/30
[size=extralarge]

Next up is the broadcast address. Same as before, we need to set all the host bits to 1, so let's look at `192.168.1.16` in binary:

11000000 10101000 00000001 00010000
[size=extralarge]
[chars=0-25,color=red]
[chars=27-32,color=green]
[chars=33-end,color=blue]

This time 6 bits are green (borrowed) and only 2 are blue (host bits). Let's set those 2 host bits to 1:

11000000 10101000 00000001 00010011
[size=extralarge]
[chars=0-25,color=red]
[chars=27-32,color=green]
[chars=33-end,color=blue]

Again, only the last octet has changed:

00010011
[size=extralarge]
[chars=0-5,color=green]
[chars=6-end,color=blue]

Converting `00010011` to decimal gives us **19** (16 + 2 + 1), so the broadcast address is `192.168.1.19`. That leaves `192.168.1.17` and `192.168.1.18` as our usable addresses, which is exactly what our formula gives us:

2^2-2=2
[size=extralarge]

That's one address for each router, with none left over. Unlike the LANs, this subnet is a perfect fit, which is why `/30` is a common choice for point-to-point links.

Here's what the point-to-point link looks like with its new subnet:

![](/post/subnetting-explained-in-computer-networking/ptp.png)

| Device  | IP Address   | Role                     |
| ------- | ------------ | ------------------------ |
| -       | 192.168.1.16 | Network address          |
| Router1 | 192.168.1.17 | Point-to-point interface |
| Router0 | 192.168.1.18 | Point-to-point interface |
| -       | 192.168.1.19 | Broadcast address        |

Note: Notice how we did the two `/29`s first and left the `/30` until last? When you're splitting a network into subnets of different sizes, always start with the biggest. A subnet's network address has to be a multiple of its size, so if we'd given the link `192.168.1.0/30` first, the next `/29` couldn't start at `.4` (4 isn't a multiple of 8). We'd have to skip ahead to `.8`, wasting `.4` to `.7`.

---

### Conclusion

---

finished: true

---

And that's subnetting covered! This blog doesn't cover absolutely everything about subnetting, but it does cover a good chunk of it. Anyway, I hope you enjoyed the read! If you spot any mistakes, please click the "Edit this page on GitHub" link and open a PR with your corrections. I've also put together a quiz below to test your knowledge. Good luck!
