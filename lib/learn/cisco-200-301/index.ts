import { generateRandomId } from "../../generate-random-id";
import { Module } from "../../../types/learn";

export const CISCO_200_301_MODULES: Module[] = [
  {
    id: generateRandomId(),
    name: "Welcome",
    lessons: [
      {
        id: generateRandomId(),
        title: "Welcome to the course",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Network Basics: What is a Network?",
        completed: true,
        learnt:
          "Networks are a collection of devices that are connected together to share resources and information. They can be classified into different types based on their size, topology, and protocols used. Each device on a network has a unique identifier called an IP address, which allows it to communicate with other devices. Networks can be wired or wireless, and they can be used for various purposes such as communication, data transfer, and internet access. Devices are also assigned a MAC address, which is a unique identifier for the network interface card (NIC) of the device.",
      },
      {
        id: generateRandomId(),
        title:
          "What is a Switch? A Router? What network is this? And what are these?",
        completed: true,
        learnt:
          "Covered the difference between physical and logical networks, and the role of switches and routers in connecting devices within a network. Learned about the different types of network topologies and how they affect network performance and reliability.",
      },
      {
        id: generateRandomId(),
        title: "Answering your questions",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Udemy tips and tricks?",
        completed: true,
        learnt: "",
      },
    ],
  },
  {
    id: generateRandomId(),
    name: "Download and Install Recommended Software",
    lessons: [
      {
        id: generateRandomId(),
        title: "Download and Install Packet Tracer (Windows)",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Download and Install Packet Tracer (macOS)",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Packet Tracer Tips and Tricks",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Packet Tracer vs Physical Equipment",
        completed: true,
        learnt: "",
      },
    ],
  },
  {
    id: generateRandomId(),
    name: "Build a network with me",
    lessons: [
      {
        id: generateRandomId(),
        title: "Build your first network with Packet Tracer",
        completed: true,
        learnt:
          "Built a simple network using Packet Tracer, including configuring IP addresses and testing connectivity between devices.",
      },
      {
        id: generateRandomId(),
        title: "Build a Web Server network for free using Cisco Packet Tracer",
        completed: true,
        learnt:
          "Built a web server network using Packet Tracer, including configuring a web server and testing connectivity from client devices.",
      },
      {
        id: generateRandomId(),
        title:
          "How does a Switch learn MAC addresses? What is a MAC address table?",
        completed: true,
        learnt:
          "Covered how switches learn MAC addresses and build a MAC address table to forward traffic to the correct destination. Learned about the different types of MAC address tables and how they are used in network communication.",
      },
      {
        id: generateRandomId(),
        title: "Why is ARP used in networks?",
        completed: true,
        learnt:
          "Covered the purpose and functionality of ARP in network communication, including how it resolves IP addresses to MAC addresses.",
      },
    ],
  },
  {
    id: generateRandomId(),
    name: "TCP/IP Model",
    lessons: [
      {
        id: generateRandomId(),
        title: "TCP/IP Model vs OSI Model",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "TCP/IP Model: Where are the devices and protocols?",
        completed: true,
        learnt:
          "Covered the TCP/IP model and its layers, including the protocols and devices that operate at each layer. Learned about the differences between the TCP/IP model and the OSI model, and how they are used in network communication.",
      },
      {
        id: generateRandomId(),
        title: "TCP/IP Model: PDUs and Encapsulation & Decapsulation",
        completed: true,
        learnt:
          "Covered the concept of PDUs (Protocol Data Units) and how they are used in the TCP/IP model. Learned about encapsulation and decapsulation processes and how they facilitate communication between different layers of the model.",
      },
      {
        id: generateRandomId(),
        title: "TCP/IP Model: Packet Tracer Lab",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "TCP/IP Model: Real World Wireshark Lab",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Quiz 1: Quiz",
        completed: true,
        learnt: "13/13",
      },
    ],
  },
  {
    id: generateRandomId(),
    name: "Binary",
    lessons: [
      {
        id: generateRandomId(),
        title: "Introduction",
        completed: true,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Binary Math",
        completed: true,
        learnt:
          "Covered the basics of binary math, including how to convert between binary and decimal numbers, and how to perform basic arithmetic operations in binary.",
      },
      {
        id: generateRandomId(),
        title: "Binary Conversion Examples",
        completed: true,
        learnt: "Learned how to convert between binary and decimal numbers.",
      },
      {
        id: generateRandomId(),
        title: "Converting IP Addressed to Binary",
        completed: true,
        learnt:
          "Covered how to convert IP addresses to binary format, including understanding the structure of IP addresses and how to represent them in binary.",
      },
      {
        id: generateRandomId(),
        title: "Quiz 2: Quiz",
        completed: true,
        learnt: "16/16",
      },
    ],
  },
];
