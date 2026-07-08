---
title: "Computer Networking"
date: "2026-06-20"
description: "My computer networking notes."
finished: true
tag: "Networking"
mins: "C"
last_updated_date: "2026-07-07"
filter: "Networking"
pinned: true
---

## Computer Networking

Computer networking has always been an interest of mine besides Software Engineering, it's actually the reason I studied IT in college, which covered a lot of networking concepts. Becoming a Network Engineer was always a career option for me, and I'm on a journey to learn as much as I can about it. I'm going to use this note to write about everything I pick up along the way. It'll be a continuous thing, so I'll be adding bits to it pretty much every day. If you spot any mistakes in my notes, please feel free to edit this note (scroll down for details).

### What is a Computer Network?

---

finished: true

---

A computer network is a system of connected devices that communicate to exchange data and resources. These devices can be your phone, computer, printer, servers, and so on. They can be connected either wirelessly or through a wired connection. A good example of a computer network is your home, where all your devices connect to your router. This is what's known as a local area network (LAN), which I'll cover later.

#### Key components of network

- **Nodes** - The physical devices on a network.
- **Connectivity Hardware** - The devices whose job is to route, filter and manage traffic across the network, so think Switches, Routers and Modems.
- **Transmission Media** - The pathway that's used to transport data packets between connected nodes on a network.
- **Protocols** - The established rules that specify exactly how data packets must be structured, transmitted and received.

#### Types of Computer Network Architecture:

The two primary types of network architecture are [Peer-to-Peer (P2P)](https://en.wikipedia.org/wiki/Peer-to-peer) and [Client-Server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model).

#### Client-Server

A system where the client nodes request data or resources from a server. The client's job is to initiate the requests, while the server stores the data and resources and processes those requests. The main advantage of this system is that it gives you a centralized place for data management, along with better security control. One of the major disadvantages is that if the server fails, all the connected client nodes are affected by it.

#### Peer-to-Peer

A system where devices on a network can communicate directly with each other without relying on a central server. Think of your home network, where you can share any file with other connected devices. The main advantage of this system is that there isn't a single point of failure, unlike with the client-server architecture. One disadvantage is that it's harder to manage and secure, so it's probably not the best architecture if an organization needs to control the resources on their network.

### The OSI Model

---

finished: false

---

OSI stands for **Open Systems Interconnection**. It's a conceptual model that explains how data travels from one computer to another over a network. The OSI model breaks network communication down into **7 layers**, each with its own specific purpose.

Here's a diagram of all the layers in the OSI model:

![](/post/networking/osi_model.png)

> I'll come to this to add explanations of all the layers.

...

### The TCP/IP Model

---

finished: false

---

The **TCP/IP (Transmission Control Protocol/Internet Protocol)** model is the networking model that's actually used on the Internet, and it dictates how data is routed and received. It's simpler than the **OSI model** and only consists of **4 layers**.

Here's the comparison between the OSI & TCP/IP model:

![](/post/networking/osi_vs_tcpip.png)

### Network Topologies

---

finished: false

---

The two main types of network topologies:

#### Physical Topology

Refers to the physical arrangement of hardware such as devices, switches & cables, and how they're physically connected.

#### Logical Topology

Describes how data actually flows through a network, regardless of its physical layout.

### Wired Network Topologies

---

finished: true

---

#### Ring Topology

All devices on a network are connected in a circular fashion, where each node has exactly two neighbors. One drawback of a single ring is that there's a single point of failure, a single broken cable can disrupt the flow of the whole network. A dual ring solves this by adding a second connection so data can travel both ways, giving you redundancy and high availability.

![](/post/networking/ring_topology.png)

#### Star Topology

Star topologies are Local Area Networks (LAN) where devices are connected to a central device, usually a **switch** or **hub**. One advantage of this topology is that it's easy to manage, since adding or removing devices is quite straightforward. A drawback is that there's a single point of failure, so if the switch or hub fails then the entire network goes down.

> Hubs aren't typically used nowadays and have largely been replaced by switches.

![](/post/networking/star_topology.png)

#### Mesh Topology

A Mesh topology is a network where devices are connected to multiple other devices. There are **two** types of mesh topologies, **Full Mesh** and **Partial Mesh**. In a full mesh topology, every device has a direct connection to every other device on the network, which provides high redundancy because of all the alternative routes. In a partial mesh topology, not every device is connected to every other device, so it's more common and cheaper than a full mesh. Because of how interconnected mesh topologies are, they're very reliable and availability rates are quite high. A drawback is that they're quite expensive to run.

![](/post/networking/mesh_topology.png)

Here's some resources on wired network topologies:

- [https://www.coursera.org/articles/network-topology](https://www.coursera.org/articles/network-topology)
- [https://www.youtube.com/watch?v=lEmBNqoBpZU](https://www.youtube.com/watch?v=lEmBNqoBpZU)

### Network Devices

---

finished: false

---

#### Routers

Routers are networking devices that **connect different networks together** and **forward data/packets between them**. The router sits between the Internet and the devices in your **local area network (LAN)**. It assigns every connected device a **private IP (Internet Protocol)** address, using the [DHCP (Dynamic Host Configuration Protocol)](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) protocol to hand these out automatically.

When a device on a network requests data from a resource on the Internet, it sends a packet to the router. Devices on a local area network (LAN) are assigned **private IP addresses**, which cannot be routed across the public Internet.

The router uses **Network Address Translation (NAT)** to replace the packet's source private IP address with the router's **public IP address**. It also creates an entry in its **NAT table** that maps the device's private IP address and source port to the router's public IP address and a translated port number. This process, commonly called **Port Address Translation (PAT)**, allows multiple devices to share a single public IP address.

The router examines the destination IP address and forwards the packet to the next hop, usually the **Internet Service Provider (ISP)**. From there, routers across the Internet continue forwarding the packet until it reaches the destination server.

The server processes the request and sends a response back to the router's public IP address. When the response reaches the router, it looks up the translated port number in its NAT table, rewrites the destination back to the original private IP address and port, and forwards the packet to the correct device on the local network.

...

<div data-embed="scrollup"></div>
