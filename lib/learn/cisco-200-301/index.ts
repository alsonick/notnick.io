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
        completed: false,
        learnt: "",
      },
    ],
  },
];
