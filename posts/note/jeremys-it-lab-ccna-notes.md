---
title: "Jeremy's IT Lab CCNA Notes"
date: "2026-08-10"
description: ""
finished: true
tag: "Networking"
mins: "C"
last_updated_date: "2026-08-13"
labs: "networking/jeremys-it-lab/labs"
filter: "Networking"
pinned: true
---

### Day 1

---

finished: true

---

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

[lab=Day 01 Lab - Packet Tracer Introduction.pkt]

---

### Day 2

---

finished: true

---

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

They're limited to **100 meters**.

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

[lab=Day 02 Lab - Connecting Devices.pkt]

---

### Day 3

---

finished: true

---

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

https://www.youtube.com/watch?v=yM-XNq9ADlI&t=883s
[preview=true]

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

https://www.youtube.com/watch?v=yM-XNq9ADlI&t=1668s
[preview=true]

---

#### Protocol Data Units

- The combination of data and a L4 header is called a **segment** (TCP) or **datagram** (UDP).
- The combination of a **segment/datagram** and a L3 header is called a **packet**.
- The combination of a packet and a L2 header/trailer is called a **frame**. - The frame is what gets sent over the physical medium.

---

#### The OSI Model

https://www.youtube.com/watch?v=yM-XNq9ADlI&t=2174s
[preview=true]

---

#### Other Versions

https://www.youtube.com/watch?v=yM-XNq9ADlI&t=2316s
[preview=true]

[lab=Day 03 Lab - OSI Model.pkt]

---

### Day 4

---

finished: true

---

#### User EXEC Mode

```
Router>
```

- The `>` symbol indicates that you're in user EXEC mode.
- `Router` is the hostname of the device.
- User EXEC mode is very limited.
- Not able to make changes to the configuration.

---

#### Privileged EXEC Mode

To enter privileged EXEC mode from user EXEC mode you must run the `enable` command.

```
Router>enable
Router#
```

- The `#` symbol indicates that you're in privileged EXEC mode.
- Provides complete access to view the device's configuration, restart the device, etc.
- Cannot change the configuration, but can change the time on the device, save the configuration file, etc.

---

#### Global Configuration Mode

To make changes to any of the configurations on the device you must enter global configuration mode.

```
Router>enable
Router#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
Router(config)#
```

The `configure terminal` command enters global configuration mode.

---

#### Enable Password

You don't want just anyone to have the ability to make changes to the network configuration for security purposes, so must protect privileged EXEC mode with a password.

```
Router(config)#enable password CCNA
```

`CCNA` is the password.

- Passwords **are** case-sensitive.

---

#### Running-Config / Startup-Config

- There are two separate configuration files kept on the device at once.
- `running-config` is the current, active configuration file on the device. As you enter commands in the CLI, you edit the active configuration.

To look at the configuration file:

```
Router#show running-config
Building configuration...

Current configuration : 714 bytes
!
version 15.1
no service timestamps log datetime msec
no service timestamps debug datetime msec
no service password-encryption
!
hostname Router
!
!
!
enable password CCNA
!
```

To run the `startup-config` file:

```
Router#show startup-config
startup-config is not present
```

`startup-config is not present` this is because we haven't have saved the running config.

---

#### Saving The Configuration

```
Router#write
Building configuration...
 [OK]
Router# copy running-config startup-config
Destination filename [startup-config]?
Building configuration...
 [OK]
Router#
```

---

#### Service Password-Encryption

```
Router#configure terminal
Enter configuration commands, one per line. Ed with CNTL/Z.
Router(config)#service password-encryption
```

`service password-encryption` will encrypt all passwords.

`service password-encryption` is not very secure.

---

#### Enable Secret

The more secure version to encrypt passwords is the `enable secret` command.

```
Router(config)#enable secret Cisco
```

`Cisco` is the password.

`enable secret` uses the [MD5](https://en.wikipedia.org/wiki/MD5) hashing algorithm.

If both the `enable secret` and `enable password` are configured, then the whatever password you had setup for `enable password` will be ignored.

`enable secret` is always encrypted by default.

---

#### Cancelling Commands

```
Router(config)#no service password-encryption
```

- The `no` keyword disable encryption for future passwords.
- Passwords that were already encrypted will **not** be decrypted.

---

#### Service Password-Encryption Summary

If you enable `service password-encryption`:

- Current passwords **will** be encrypted.
- Future passwords **will** be encrypted.
- The `enable secret` will not be affected (it's always encrypted).

If you disable `service password encryption`:

- Current passwords **will not** be decrypted.
- Future passwords **will not** be encrypted.
- `enable secret` **will not** be affected.

[lab=Day 04 Lab - Basic Device Security.pkt]

---

### Day 5 (Part 1)

---

finished: true

---

#### Local Area Networks (LANs)

Local area networks are networks confined to a small area like a home or small office.

- Routers are use to connect separate LANs.

---

#### OSI Model - PDUs

https://www.youtube.com/watch?v=u2n762WG0Vo&t=286s
[preview=true]

The different stages of preparing data to be forwarded are **Protocol Data Units (PDUs)**.

---

#### Ethernet Frame

https://www.youtube.com/watch?v=u2n762WG0Vo&t=348s
[preview=true]

There are 5 fields in the ethernet frame header:

- Preamble
- SFD (Start Frame Delimiter)
- Destination
- Source
- Type (or Length)

There is only 1 field in the ethernet frame trailer:

- FCS (Frame Check Sequence)
  - Used by the receiving device to check if any errors occurred during the transmission.

The header and trailer are **26 bytes** in length.

---

#### Preamble & SFD

Preamble:

- Length: 7 bytes (56 bits).
- Alternating 1's and 0's.
- Allows devices to synchronize their receiver clocks.

SFD:

- Stands for 'Start Frame Delimiter'.
- Length: 1 byte (8 bits).
- Marks the end of the preamble, and the beginning of the rest of the frame.

---

#### Destination & Source

- Indicate the devices sending and receiving the frame.
- Mainly consist of the destination and source MAC address.
- MAC = Media Access Control.
- 6 byte (48 bit) address of the physical device.

---

#### Type / Length

- 2 bytes (16 bits).
- A value of **1500 or less** in this field indicates the **length** of the encapsulated packet.
- A value of **1536 or greater** in this field indicates the **type** of encapsulated packet, and the length is determined via other methods.

---

#### Frame Check Sequence (FCS)

- Stands for 'Frame Check Sequence'.
- 4 bytes (32 bits).
- Detects corrupted data by running a 'CRC' algorithm over the received data.
- CRC = 'Cyclic Redundancy Check'.

---

#### MAC Address

- Is globally unique.
- The first 3 bytes are the OUI (Organizationally Unique Identifier), which is assigned to the company making the device.
- The last 3 bytes are unique to the device itself.
- Written as 12 **hexadecimal** characters.

---

### Day 6 (Part 2)

<div data-embed="scrollup"></div>
