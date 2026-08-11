---
title: "Jeremy's IT Lab CCNA Notes"
date: "2026-08-10"
description: ""
finished: true
tag: "Networking"
mins: "C"
last_updated_date: "2026-08-10"
filter: "Networking"
pinned: true
---

### Day 1

#### What is a network?

A computer network is a digital telecommunications network which allows nodes to share resources.

Nodes can consist of the following devices:

- Routers
- Switches
- Firewalls
- Servers
- Clients

---

#### Clients

Clients are devices that can access a **service made available by a server.**

---

#### Servers

A server is **a device that provides services or resources to a client**.

The same device can be a client in some situations, and a server in other situations.

---

#### Switches

Switches provide connectivity to hosts within the same LAN (Local Area Network).

---

#### Routers

Routers are used to provide connectivity **between** LANs.

---

#### Firewalls

- They are hardware devices that filter traffic between networks.
- They monitor and control network traffic based on configured rules.
- Can either be placed inside or outside the network.

Host based firewalls are software based applications that run on **individual devices**.

---

### Day 2

#### Ethernet

Ethernet is a collection of network protocols/standards.

---

#### Ethernet Standards

- Ethernet standards are defined in the IEEE 802.3 standard in 1983.
- IEE stands for **Institute of Electrical and Electronics Engineers**.

---

#### Ethernet Standards (Copper)

| Speed    | Common Name      | IEEE Standard | Informal Name | Maximum Length |
| -------- | ---------------- | ------------- | ------------- | -------------- |
| 10 Mbps  | Ethernet         | 802.3i        | 10BASE-T      | 100 m          |
| 100 Mbps | Fast Ethernet    | 802.3u        | 100BASE-T     | 100 m          |
| 1 Gbps   | Gigabit Ethernet | 802.3ab       | 1000BASE-T    | 100 m          |
| 10 Gbps  | 10 Gig Ethernet  | 802.3an       | 10GBASE-T     | 100 m          |

---

#### UTP Cables

UTP = Unshielded Twisted Pair

They limited to **100 meters**.

- Unshielded
  - Means that the wires have no **metallic shield**, which makes them **vulnerable to electromagnetic magnetic interferences**.

The twisted wires helps protect against electromagnetic magnetic interferences.

| Standard               | Pairs Used        |
| ---------------------- | ----------------- |
| 10BASE-T / 100BASE-T   | 2 pairs (4 wires) |
| 1000BASE-T / 10GBASE-T | 4 pairs (8 wires) |

---

#### UTP Cables (10BASE-T, 100BASE-T)

| Device Type | Transmit (Tx) Pins | Receive (Rx) Pins |
| ----------- | ------------------ | ----------------- |
| Router      | 1 and 2            | 3 and 6           |
| Firewall    | 1 and 2            | 3 and 6           |
| PC          | 1 and 2            | 3 and 6           |
| Switch      | 3 and 6            | 1 and 2           |

---

#### Fiber-Optic Connections

There are two types of fiber cables:

- Single-mode (SMF)
- Multimode (MMF)

---

#### Multimode Fiber

- Core diameter is wider than single-mode fiber.
- Allows multiple angles (modes) of light waves to enter the fiberglass core.
- Allows longer cables than UTP, but shorter cables than single-mode fiber.
- Cheaper than single-mode fiber.

---

#### Single-Mode Fiber

- Core diameter is narrower than multimode fiber.
- Light enters at a single angle (mode) from a laser-based transmitter.
- Allows longer cable lengths than both UTP and multimode fiber.
- More expensive then single-mode fiber.

---

#### Fiber-Optic Cable Standards

| Informal Name | IEEE Standard | Speed   | Cable Type               | Maximum Length         |
| ------------- | ------------- | ------- | ------------------------ | ---------------------- |
| 1000BASE-LX   | 802.3z        | 1 Gbps  | Multimode or Single-Mode | 550 m (MM) / 5 km (SM) |
| 10GBASE-SR    | 802.3ae       | 10 Gbps | Multimode                | 400 m                  |
| 10GBASE-LR    | 802.3ae       | 10 Gbps | Single-Mode              | 10 km                  |
| 10GBASE-ER    | 802.3ae       | 10 Gbps | Single-Mode              | 30 km                  |

---

#### UTP vs Fiber-Optic Cabling

| UTP                                                                                     | Fiber-Optic                                                                                  |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Lower cost than fiber-optic.                                                            | Higher cost than UTP.                                                                        |
| Shorter maximum distance than fiber-optic (~100m).                                      | Longer maximum distance than UTP.                                                            |
| Can be vulnerable to EMI (Electromagnetic Interference).                                | No vulnerability to EMI.                                                                     |
| RJ45 ports used with UTP are cheaper than SFP ports.                                    | SFP ports are more expensive than RJ45 ports (single-mode is more expensive than multimode). |
| Emit (leak) a faint signal outside of the cable, which can be copied (= security risk). | Does not emit any signal outside of the cable (= no security risk).                          |

---

### Day 3

#### Protocols and Standards

A protocol is a set of rules defining how data should be communicated between devices over a network.

---

#### Who defines the standards?

Most networking standards are developed by independent standards organizations, not a single vendor, with participation from engineers at many companies.

| Organization                                                 | Role                                                          | Examples                         |
| ------------------------------------------------------------ | ------------------------------------------------------------- | -------------------------------- |
| **IEEE** (Institute of Electrical and Electronics Engineers) | Develops many of the technologies used on local area networks | Ethernet (802.3), Wi-Fi (802.11) |
| **IETF** (Internet Engineering Task Force)                   | Open community that defines protocols used on the Internet    | TCP, IP, UDP, HTTP, DNS, etc.    |

---

#### The TCP/IP Model

![](/post/jeremys-it-lab-ccna-notes/layers_explained.png)

---

#### Layer 1: The Physical Layer

- Responsible for sending and receiving bits as electrical, optical, or radio signals over the medium.
- Defines things like cables, connectors, signal levels, and link speeds.
- Examples: copper UTP cables, fiber-optic cables, Wi-Fi radios and antennas, network interface cards (NICs).

---

#### Layer 2: The Local Network Layer

- Provides **hop-to-hop** delivery of messages on a local network.
  - A hop is a one step along the path between two devices: from one router or host, to the next router or host in the path.
- Uses **MAC (Media Access Control) addresses** to identify interfaces.
  - Each device connected to a LAN has a unique MAC address assigned to it.
- Protocols at this layer include:
  - Ethernet (IEEE 802.3)
  - Wi-Fi (IEEE 802.11)

---

#### Layer 3: The Internet Layer

- Provides end-to-end delivery between hosts across multiple networks.
- Uses **IP addresses** to identify hosts on a network.
- Routers operate at this layer, using the message's destination IP address to forward the message toward its final destination host.
- Protocols at this layer include:
  - IP (IPv4, IPv6)
  - ICMP (Internet Control Message Protocol)

---

#### Layer 4: The Transport Layer

- Provides end-to-end communication between application processes.
- Uses **port numbers** to identify the processes on each host.
- Runs mainly on the communicating hosts.
- Protocols at this layer include:
  - UDP (User Datagram Protocol)
  - TCP (Transmission Control Protocol)

---

#### Layer 5: The Application Layer

- The **Application layer (layer 5)** is where network communications meet applications.
- Defines how application processes format, send, and interpret data.
- Protocols at this layer define message formats and rules for specific tasks, such as:
  - Browsing web pages (HTTP/HTTPS)
  - Transferring files (FTP/TFTP)
  - Sending/Receiving email (SMTP, POP3, IMAP)
- Network infrastructure devices (routers, switches) don't care about application-layer details.

---

#### Encapsulation & Decapsulation

https://www.youtube.com/watch?v=ntVii_EJc6s
[preview=true]

<div data-embed="scrollup"></div>
