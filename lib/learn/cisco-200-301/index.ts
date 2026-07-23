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
        completed: false,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Download and Install Packet Tracer (macOS)",
        completed: false,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Packet Tracer Tips and Tricks",
        completed: false,
        learnt: "",
      },
      {
        id: generateRandomId(),
        title: "Packet Tracer vs Physical Equipment",
        completed: false,
        learnt: "",
      },
    ],
  },
];
