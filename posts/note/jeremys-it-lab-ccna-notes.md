---
title: "Jeremy's IT Lab CCNA Notes"
date: "2026-08-10"
description: ""
finished: true
tag: "Networking"
mins: "C"
last_updated_date: "2026-08-19"
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

Key points:

- The header and trailer are **26 bytes** in length.
- The minimum size for an Ethernet frame is **64 bytes**.
- The minimum payload for the Ethernet frame is 46 bytes.
- If the payload is **less than 46 bytes**, padding bytes are added.

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

The **Preamble & SFD** is usually not considered part of the Ethernet header. Therefore the size of the Ethernet header + trailer is 18 bytes.

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

---

finished: true

---

#### ARP

- ARP stands for 'Address Resolution Protocol'.
- APR is used to discover the Layer 2 address (MAC address) of a known Layer 3 address (IP address).
- Consists of two messages:
  - **ARP Request**
  - **ARP Reply**
- **ARP Request** is **broadcast** (sent to all hosts on the network).
- **ARP Reply** is **unicast** (the host that sent the request).

---

#### Ping

- A network utility that is used to test reachability.
- Measures round-trip time.
- Uses two messages:
  - **ICMP Echo Request**
  - **ICMP Echo Reply**

---

#### MAC Address Table

https://www.youtube.com/watch?v=5q1pqdmdPjo&t=1225
[preview=true]

The command to view the MAC address table on a Cisco switch:

```
SW1#show mac address-table
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
   1    0c2f.b011.9d00    DYNAMIC     Gi0/0
   1    0c2f.b06a.3900    DYNAMIC     Gi0/2
Total Mac Addresses for this criterion: 2
SW1#
```

---

#### Clearing the MAC Address Table

This command will remove all dynamic MAC addresses from the table:

```
Total Mac Addresses for this criterion: 2
SW1#clear mac address-table dynamic
SW1#show mac address-table
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
SW1#
```

```
clear mac address-table dynamic
```

If the switch doesn't get any traffic from a certain MAC address for 5 minutes, it will remove the entry from the MAC address table, this process is called **aging**.

To remove a certain MAC address from the table:

```
SW1#clear mac address-table dynamic address 0c2f.b011.9d00
SW1#show mac address-table
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
   1    0c2f.b06a.3900    DYNAMIC     Gi0/2
Total Mac Addresses for this criterion: 1
SW1#
```

```
clear mac address-table dynamic address mac-address
```

You can clear a MAC address from the table by specifying the interface/port:

```
SW1#clear mac address-table dynamic interface Gi0/0
SW1#show mac address-table
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
   1    0c2f.b06a.3900    DYNAMIC     Gi0/2
Total Mac Addresses for this criterion: 1
SW1#
```

```
clear mac address-table dynamic interface interface-id
```

[lab=Day 06 Lab - Ethernet LAN Switching.pkt]

---

### Day 7 (Part 1)

---

finished: true

---

#### IPv4 Header

- IP addresses are 32 bits (4 bytes) in length.

---

#### IPv4 Addresses

An example IPv4 address:

`192.168.1.254/24`

- Each group is 8 bits.
- Each 8 bit group is called an octet.
- The `/24` means the first 24 bits represents the network portion of the address.
- The remaining 8 bits represents the end host portion.

So `192.168.1` is the network portion and `.254` is the host portion.

---

#### IPv4 Address Classes

| Class | First octet | First octet numeric range |
| ----- | ----------- | ------------------------- |
| A     | 0xxxxxxx    | 0-127                     |
| B     | 10xxxxxx    | 128-191                   |
| C     | 110xxxxx    | 192-223                   |
| D     | 1110xxxx    | 224-239                   |
| E     | 1111xxxx    | 240-255                   |

Classes A, B and C are the classes used for hosts, and each has a default prefix length:

| Class | First octet | First octet numeric range | Prefix Length |
| ----- | ----------- | ------------------------- | ------------- |
| A     | 0xxxxxxx    | 0-127                     | /8            |
| B     | 10xxxxxx    | 128-191                   | /16           |
| C     | 110xxxxx    | 192-223                   | /24           |

The prefix length determines how many networks each class has, and how many addresses are in each of those networks:

| Class   | Leading bits | Size of _network number_ bit field | Size of _rest_ bit field | Number of networks         | Addresses per network       |
| ------- | ------------ | ---------------------------------- | ------------------------ | -------------------------- | --------------------------- |
| Class A | 0            | 8                                  | 24                       | 128 (2<sup>7</sup>)        | 16,777,216 (2<sup>24</sup>) |
| Class B | 10           | 16                                 | 16                       | 16,384 (2<sup>14</sup>)    | 65,536 (2<sup>16</sup>)     |
| Class C | 110          | 24                                 | 8                        | 2,097,152 (2<sup>21</sup>) | 256 (2<sup>8</sup>)         |

---

#### Loopback Addresses

- Addresses range `127.0.0.0` - `127.255.255.255`.
- Used to test the network stack on the local device.

![](/post/jeremys-it-lab-ccna-notes/loopback-terminal-example.png)

---

#### Netmask

A netmask (also called a subnet mask) is another way of writing the prefix length. It's a 32 bit value where the bits belonging to the network portion are set to `1`, and the bits belonging to the host portion are set to `0`.

So `/24` and `255.255.255.0` mean exactly the same thing: the first 24 bits are the network portion.

| Class | Prefix Length | Netmask       | Netmask in binary                   |
| ----- | ------------- | ------------- | ----------------------------------- |
| A     | /8            | 255.0.0.0     | 11111111 00000000 00000000 00000000 |
| B     | /16           | 255.255.0.0   | 11111111 11111111 00000000 00000000 |
| C     | /24           | 255.255.255.0 | 11111111 11111111 11111111 00000000 |

---

#### Network Address

- Host portion of the address is all 0's = **Network Address**.
- The **network address** cannot be assigned a host.

---

#### Broadcast Address

- Host portion of the address is all 1's = **Broadcast Address**.
- The **broadcast address** cannot be assigned to a host.

---

### Day 8 (Part 2)

---

finished: true

---

#### Viewing Interfaces

The command to view a summary of all the interfaces on a router:

```
R1>en
R1#show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0     unassigned      YES unset  administratively down down
GigabitEthernet0/1     unassigned      YES unset  administratively down down
GigabitEthernet0/2     unassigned      YES unset  administratively down down
GigabitEthernet0/3     unassigned      YES unset  administratively down down
R1#
```

```
show ip interface brief
```

- Lists every interface on the device, its IP address, and whether it's up or down.
- `unassigned` means no IP address has been configured on the interface yet.
- **Status** is the Layer 1 state, and **Protocol** is the Layer 2 state.
- `administratively down` means the interface has been manually disabled, router interfaces are disabled by default.
- This is the default **status** of Cisco router interfaces.
- Cisco switch interfaces are not `administratively down` by default.

Switch interfaces do not have the 'shutdown' command applied by default. They will have the `up/up` state if connected to another device, or the `down/down` state if they're not.

---

#### Configuring an Interface

To configure an interface you first have to enter interface configuration mode:

```
R1#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
R1(config)#interface gigabitethernet 0/0
R1(config-if)#
```

```
interface interface-id
```

- `conf t` is short for `configure terminal`, which takes you from privileged EXEC mode into global configuration mode.
- `interface gigabitethernet 0/0` selects the interface you want to configure.
- The prompt changes from `R1(config)#` to `R1(config-if)#`, which tells you any commands you type now will apply to that interface only.

---

#### Assigning an IP Address to an Interface

Once you're in interface configuration mode you can give the interface an IP address and enable it:

```
R1(config-if)#ip address 10.255.255.254 ?
  A.B.C.D  IP subnet mask

R1(config-if)#ip address 10.255.255.254 255.0.0.0
R1(config-if)#no shutdown
R1(config-if)#
*Dec  7 08:29:08.937: %LINK-3-UPDOWN: Interface GigabitEthernet0/0, changed state to up
*Dec  7 08:29:09.938: %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0, changed state to up
R1(config-if)#
```

```
ip address ip-address netmask
```

- The `?` shows you what the router expects next, in this case the netmask.
- The netmask has to be written out in full (`255.0.0.0`), you can't use the `/8` prefix notation here.
- `no shutdown` enables the interface, this is what takes it out of the `administratively down` state.
- The two messages that follow are the router telling you the interface came up:
  - **%LINK-3-UPDOWN** is Layer 1 (the **Status** column) coming up.
  - **%LINEPROTO-5-UPDOWN** is Layer 2 (the **Protocol** column) coming up.

---

#### Running Show Commands from Configuration Mode

`show` commands normally only work in privileged EXEC mode, but you can run them from configuration mode by putting `do` in front:

```
R1(config-if)#do show ip interface brief
Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0     10.255.255.254  YES manual up                    up
GigabitEthernet0/1     unassigned      YES unset  administratively down down
GigabitEthernet0/2     unassigned      YES unset  administratively down down
GigabitEthernet0/3     unassigned      YES unset  administratively down down
R1(config-if)#
```

```
do show-command
```

- Saves you from having to `exit` back to privileged EXEC mode just to check something.
- Gi0/0 is now the only interface with an IP address, and its **Status** and **Protocol** are both `up`.
- The **Method** changed from `unset` to `manual`, which means the address was configured by hand.

---

#### Show Interfaces [Interface]

`show ip interface brief` gives you a summary of every interface, `show interfaces` gives you everything about one interface:

```
R1#show interfaces g0/0
GigabitEthernet0/0 is up, line protocol is up
  Hardware is iGbE, address is 0c1b.8444.f000 (bia 0c1b.8444.f000)
  Internet address is 10.255.255.254/8
  MTU 1500 bytes, BW 1000000 Kbit/sec, DLY 10 usec,
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive set (10 sec)
  Auto Duplex, Auto Speed, link type is auto, media type is RJ45
  output flow-control is unsupported, input flow-control is unsupported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input 00:00:06, output 00:00:05, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/75/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 0 bits/sec, 0 packets/sec
  5 minute output rate 0 bits/sec, 0 packets/sec
     167 packets input, 30159 bytes, 0 no buffer
     Received 0 broadcasts (0 IP multicasts)
     0 runts, 0 giants, 0 throttles
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 watchdog, 0 multicast, 0 pause input
     350 packets output, 39097 bytes, 0 underruns
     0 output errors, 0 collisions, 2 interface resets
     105 unknown protocol drops
     0 babbles, 0 late collision, 0 deferred
     1 lost carrier, 0 no carrier, 0 pause output
     0 output buffer failures, 0 output buffers swapped out
```

```
show interfaces interface-id
```

- `g0/0` is shorthand for `GigabitEthernet0/0`.
- If you leave the interface off the end, it shows this same output for **every** interface on the device.
- `is up, line protocol is up` is the same Layer 1 / Layer 2 state as the **Status** and **Protocol** columns.
- `address is 0c1b.8444.f000` is the MAC address of the interface, and `bia` (burned in address) is the one that came from the factory.
- `Internet address is 10.255.255.254/8` is the IP address and prefix length configured on the interface.
- `MTU 1500 bytes` is the largest packet the interface will send without breaking it up.
- `BW 1000000 Kbit/sec` is the bandwidth (1 Gbps).
- The counters at the bottom (`input errors`, `CRC`, `collisions`, etc) are what you use to troubleshoot a link, they should all be 0 on a healthy interface.

---

#### Show Interfaces Description

```
R1#show interfaces description
Interface                      Status         Protocol Description
Gi0/0                          up             up
Gi0/1                          up             up
Gi0/2                          up             up
Gi0/3                          admin down     down
```

```
show interfaces description
```

- Gives you a shorter summary than `show ip interface brief`, no IP addresses, just the state of each interface.
- The **Description** column is empty because no descriptions have been configured yet.
- A description is just a label you give an interface to remind you what it connects to, it has no effect on how the interface works.
- `admin down` is the short way of writing `administratively down`.

---

#### Adding a Description to an Interface

You add a description from interface configuration mode:

```
R1(config)#int g0/0
R1(config-if)#description ## to SW1 ##
R1(config-if)#int g0/1
R1(config-if)#desc ## to SW2 ##
R1(config-if)#int g0/2
R1(config-if)#desc ## to SW3 ##
R1(config-if)#do sh int desc
Interface                      Status         Protocol Description
Gi0/0                          up             up       ## to SW1 ##
Gi0/1                          up             up       ## to SW2 ##
Gi0/2                          up             up       ## to SW3 ##
Gi0/3                          admin down     down
```

```
description text
```

- `desc` is short for `description`, and `int` is short for `interface`.
- You don't have to `exit` between interfaces, typing `int g0/1` while in `(config-if)` mode just moves you straight to the next interface.
- The `##` are not special, they're just there to make the description stand out in the output.
- Gi0/3 has no description because one was never set on it.

[lab=Day 08 Lab - IPv4 Addresses.pkt]

---

### Day 9

#### Show Interfaces Status

```
SW1#show interfaces status
Port      Name               Status       Vlan       Duplex  Speed Type
Fa0/1                        connected    1          a-full  a-100 10/100BaseTX
Fa0/2                        connected    trunk      a-full  a-100 10/100BaseTX
Fa0/3                        connected    1          a-full  a-100 10/100BaseTX
Fa0/4                        connected    1          a-full  a-100 10/100BaseTX
Fa0/5                        notconnect   1            auto   auto 10/100BaseTX
Fa0/6                        notconnect   1            auto   auto 10/100BaseTX
Fa0/7                        notconnect   1            auto   auto 10/100BaseTX
Fa0/8                        notconnect   1            auto   auto 10/100BaseTX
Fa0/9                        notconnect   1            auto   auto 10/100BaseTX
Fa0/10                       notconnect   1            auto   auto 10/100BaseTX
Fa0/11                       notconnect   1            auto   auto 10/100BaseTX
Fa0/12                       notconnect   1            auto   auto 10/100BaseTX
```

```
show interfaces status
```

- **Port** is the interface, `Fa0/1` is short for `FastEthernet0/1`.
- **Name** is the description set on the port.
- **Status** is whether the port is up:
  - `connected` = something is plugged in.
  - `notconnect` = nothing is plugged in.
  - `disabled` = the port was shut down.
- **Vlan** is the VLAN the port is in, `1` is the default.
  - `trunk` means the port carries multiple VLANs.
- **Duplex** is `full` (send and receive at once) or `half` (one at a time).
- **Speed** is the speed of the port in Mbps.
- **Type** is the physical port, `10/100BaseTX` is copper RJ45 that runs at 10 or 100 Mbps.

`a-` means **autonegotiated**, the two devices agreed on the speed and duplex themselves.

- Ports with nothing plugged in just say `auto` because there's nothing to negotiate with.

---

#### Configuring Interface Speed and Duplex

```
SW1#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
SW1(config)#int f0/1
SW1(config-if)#speed ?
  10    Force 10 Mbps operation
  100   Force 100 Mbps operation
  auto  Enable AUTO speed configuration
SW1(config-if)#speed 100
SW1(config-if)#duplex ?
  auto  Enable AUTO duplex configuration
  full  Force full duplex operation
  half  Force half-duplex operation
SW1(config-if)#duplex full
SW1(config-if)#description ## to R1 ##
```

```
speed 10 | 100 | auto
duplex auto | full | half
```

- `speed` and `duplex` are set in interface configuration mode.
- `?` shows you the options you can use with a command.
- The options are the speeds the port supports.
- Setting a speed or duplex **forces** it, the port stops autonegotiating and uses what you told it.
- `auto` puts it back to autonegotiating.
- `description` sets the description for that interface.

---

#### Interface Range

```
SW1(config)#interface range f0/5 - 12
SW1(config-if-range)#description ## not in use ##
SW1(config-if-range)#shutdown
00:42:36: %LINK-5-CHANGED: Interface FastEthernet0/5, changed state to administratively down
00:42:36: %LINK-5-CHANGED: Interface FastEthernet0/6, changed state to administratively down
00:42:36: %LINK-5-CHANGED: Interface FastEthernet0/7, changed state to administratively down
00:42:36: %LINK-5-CHANGED: Interface FastEthernet0/8, changed state to administratively down
00:42:36: %LINK-5-CHANGED: Interface FastEthernet0/9, changed state to administratively down
00:42:36: %LINK-5-CHANGED: Interface FastEthernet0/10, changed state to administratively down
00:42:36: %LINK-5-CHANGED: Interface FastEthernet0/11, changed state to administratively down
00:42:36: %LINK-5-CHANGED: Interface FastEthernet0/12, changed state to administratively down
SW1(config-if-range)#
```

```
interface range interface-id - interface-id
```

- `interface range` lets you configure lots of interfaces at once instead of one at a time.
- `f0/5 - 12` means f0/5 up to f0/12, that's 8 interfaces.
- The prompt changes to `(config-if-range)` to show you're editing a group of interfaces.
- Every command you enter is applied to all of them, so all 8 got the same description and were shut down.
- Shutting down unused ports is good practice, it stops anyone plugging into a spare port to get onto the network.

```
SW1(config)#int range f0/5 - 6, f0/9 - 12
SW1(config-if-range)#no shut
00:57:07: %LINK-3-UPDOWN: Interface FastEthernet0/5, changed state to up
00:57:07: %LINK-3-UPDOWN: Interface FastEthernet0/6, changed state to up
00:57:07: %LINK-3-UPDOWN: Interface FastEthernet0/9, changed state to up
00:57:07: %LINK-3-UPDOWN: Interface FastEthernet0/10, changed state to up
00:57:07: %LINK-3-UPDOWN: Interface FastEthernet0/11, changed state to up
00:57:07: %LINK-3-UPDOWN: Interface FastEthernet0/12, changed state to up
```

```
interface range interface-id - interface-id, interface-id - interface-id
```

- You can select more than one range at a time by separating them with a comma.
- `f0/5 - 6, f0/9 - 12` selects f0/5, f0/6, and f0/9 to f0/12, f0/7 and f0/8 are skipped.
- `no shut` is short for `no shutdown`, it turns the interfaces back on.

---

Full/Half Duplex

- **Half duplex** means that the device cannot send and receive data at the same time. If it is receiving a frame, it must wait before sending a frame.
- **Full duplex** means that the device **can** send and receive data at the same time.

Devices connected to hubs must operate in half duplex.

---

#### CSMA/CD

- Stands for 'Carrier Sense Multiple Access with Collision Detection'.
- Before sending frames, devices listen to the collision domain until they detect that other devices are not sending traffic.
- If a collision does occur, the device sends a jamming signal to inform the other devices that a collision has occurred.
- Each device will wait a random period of time before sending frames again.
- This whole process repeats.

---

#### Speed/Duplex Autonegotiation

- Interfaces that can run at different speeds (10/100 or 10/100/1000) have default setting of **speed auto** and **duplex auto**.
- Interfaces tell the device on the other end what they're capable of, and the two agree on the fastest **speed** and best **duplex** they can both do.

If autonegotiation is disabled on the other device, the switch has to work it out on its own:

- **Speed**: the switch tries to sense what speed the other device is running at.
  - If it can't, it uses the **slowest** speed it supports (10 Mbps on a 10/100/1000 interface).
- **Duplex**: the switch picks the duplex based on the speed it ended up with.
  - 10 or 100 Mbps = **half duplex**.
  - 1000 Mbps or faster = **full duplex**.

---

#### Duplex Mismatch

A duplex mismatch is when one end of a link is on full duplex and the other end is on half duplex.

It happens because the switch can sense the **speed** the other device is using, but it can't sense the **duplex**, so it has to guess with the rule above.

Here's a switch on `auto` with 3 PCs that were all set manually:

| PC is set to     | Switch senses | Switch guesses | Result       |
| ---------------- | ------------- | -------------- | ------------ |
| 10 Mbps / half   | 10 Mbps       | half duplex    | match        |
| 1000 Mbps / full | 1000 Mbps     | full duplex    | match        |
| 100 Mbps / full  | 100 Mbps      | half duplex    | **mismatch** |

The last one breaks because the switch always guesses half duplex at 100 Mbps, but the PC was set to full.

What goes wrong:

- The full duplex end sends whenever it wants, it doesn't check if the line is busy.
- The half duplex end is using CSMA/CD, so frames arriving while it's sending look like a **collision**.
- It stops, waits, then sends the frame again.

The link still works, it's just slow, and it gets worse the more traffic you put through it.

- The half duplex end shows **late collisions**.
- The full duplex end shows **CRC errors** and **runts**.
- Both show up in the counters at the bottom of `show interfaces`.

The fix is to make both ends match, either put both on `auto` or set both manually to the same thing.

---

#### Interface Errors

These are the counters at the bottom of `show interfaces`:

```
269 packets input, 71059 bytes, 0 no buffer
Received 6 broadcasts, 0 runts, 0 giants, 0 throttles
0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
7290 packets output, 429075 bytes, 0 underruns
0 output errors, 3 interface resets
0 output buffer failures, 0 output buffers swapped out
```

- **Runts** are frames smaller than the minimum frame size (64 bytes).
- **Giants** are frames larger than the maximum frame size (1518 bytes).
- **CRC** are frames that failed the CRC (Cyclic redundancy check) check in the Ethernet FCS trailer.
- **Frame** are frames with an incorrect format, caused by an error.
- **Input errors** is the total of the above four and a few others.
- **Output errors** are frames the switch tried to send but couldn't because of an error.

<div data-embed="scrollup"></div>
