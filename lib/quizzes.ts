import { QuizQuestion } from "../types/quiz";

// Quiz questions keyed by post slug, then by section id (the slugified
// section heading, same as the heading's anchor id). A quiz renders at the
// end of a section once the section's metadata says `finished: true` AND an
// entry for it exists here.
export const quizzes: Record<string, Record<string, QuizQuestion>> = {
  networking: {
    "what-is-a-computer-network": {
      id: "what-is-a-computer-network",
      topic: "What is a Computer Network?",
      question:
        "Which component of a computer network establishes the rules for exactly how data packets must be structured, transmitted and received?",
      options: [
        "Nodes",
        "Connectivity Hardware",
        "Transmission Media",
        "Protocols",
      ],
      correctIndex: 3,
    },
    "the-osi-model": {
      id: "the-osi-model",
      topic: "The OSI Model",
      question:
        "How many layers does the OSI model break network communication into?",
      options: ["4 layers", "5 layers", "7 layers", "8 layers"],
      correctIndex: 2,
    },
    "the-tcpip-model": {
      id: "the-tcpip-model",
      topic: "The TCP/IP Model",
      question:
        "The TCP/IP model — the model actually used on the Internet — consists of how many layers?",
      options: ["7 layers", "4 layers", "5 layers", "3 layers"],
      correctIndex: 1,
    },
    "network-topologies": {
      id: "network-topologies",
      topic: "Network Topologies",
      question:
        "Which type of network topology describes how data actually flows through a network, regardless of its physical layout?",
      options: [
        "Physical topology",
        "Logical topology",
        "Star topology",
        "Ring topology",
      ],
      correctIndex: 1,
    },
    "wired-network-topologies": {
      id: "wired-network-topologies",
      topic: "Wired Network Topologies",
      question:
        "In which wired network topology does every device have a direct connection to every other device on the network?",
      options: [
        "Star topology",
        "Ring topology",
        "Partial mesh topology",
        "Full mesh topology",
      ],
      correctIndex: 3,
    },
    "network-devices": {
      id: "network-devices",
      topic: "Network Devices",
      question:
        "Which network device learns the MAC address of each connected device so it can forward data only to the device it was intended for?",
      options: ["A hub", "A modem", "A switch", "An access point"],
      correctIndex: 2,
    },
  },
  "jeremys-it-lab-ccna-notes": {
    "day-1": {
      id: "day-1",
      topic: "Day 1",
      question:
        "Two hosts sit on separate LANs and need to communicate with each other. Which device provides the connectivity between those LANs?",
      options: ["A switch", "A router", "A firewall", "A server"],
      correctIndex: 1,
    },
    "day-2": {
      id: "day-2",
      topic: "Day 2",
      question:
        "On a 10BASE-T or 100BASE-T link, which device transmits on pins 3 and 6 and receives on pins 1 and 2?",
      options: ["A PC", "A router", "A switch", "A firewall"],
      correctIndex: 2,
    },
    "day-3": {
      id: "day-3",
      topic: "Day 3",
      question:
        "What do you call a packet once a Layer 2 header and trailer have been added to it?",
      options: ["A segment", "A datagram", "A frame", "A bit stream"],
      correctIndex: 2,
    },
    "day-4": {
      id: "day-4",
      topic: "Day 4",
      question:
        "A router has both an enable password and an enable secret configured. Which one do you need to enter to reach privileged EXEC mode?",
      options: [
        "The enable password",
        "The enable secret",
        "Either one is accepted",
        "Neither, both are ignored",
      ],
      correctIndex: 1,
    },
    "day-5-part-1": {
      id: "day-5-part-1",
      topic: "Day 5 (Part 1)",
      question:
        "A switch receives an Ethernet frame whose Type/Length field holds the value 1500. What does that value tell the receiving device?",
      options: [
        "The type of packet encapsulated in the frame",
        "The length of the encapsulated packet",
        "The number of bytes in the preamble and SFD",
        "The size of the frame check sequence",
      ],
      correctIndex: 1,
    },
    "day-6-part-2": {
      id: "day-6-part-2",
      topic: "Day 6 (Part 2)",
      question:
        "A host knows the IP address of another host on its LAN, but not its MAC address. How are the two ARP messages that follow addressed?",
      options: [
        "The request is unicast and the reply is broadcast",
        "The request is broadcast and the reply is unicast",
        "Both the request and the reply are broadcast",
        "Both the request and the reply are unicast",
      ],
      correctIndex: 1,
    },
    "day-7-part-1": {
      id: "day-7-part-1",
      topic: "Day 7 (Part 1)",
      question:
        "A host is configured with the address 172.16.5.10/16. Which address is the broadcast address of the network it belongs to?",
      options: [
        "172.16.255.255",
        "172.16.5.255",
        "172.255.255.255",
        "255.255.0.0",
      ],
      correctIndex: 0,
    },
    "day-8-part-2": {
      id: "day-8-part-2",
      topic: "Day 8 (Part 2)",
      question:
        "You configure an IP address on a router interface, but `show ip interface brief` still shows it as administratively down. What do you need to do to bring it up?",
      options: [
        "Enter `no shutdown` on the interface",
        "Add a description to the interface",
        "Re-enter the address with a /8 prefix instead of a netmask",
        "Nothing, the interface comes up on its own after a few seconds",
      ],
      correctIndex: 0,
    },
    "day-9": {
      id: "day-9",
      topic: "Day 9",
      question:
        "A PC is set manually to 100 Mbps and full duplex, and the switch port it connects to is left on auto. What happens on that link?",
      options: [
        "The switch senses full duplex from the PC and both ends match",
        "The switch guesses half duplex, so the link comes up with a duplex mismatch",
        "The link fails to come up because the two ends disagree",
        "The switch drops the port down to 10 Mbps and half duplex",
      ],
      correctIndex: 1,
    },
    "day-10": {
      id: "day-10",
      topic: "Day 10",
      question:
        "A router receives an IPv4 packet whose IHL field holds the value 6. How long is the header, and what does that value tell you about the Options field?",
      options: [
        "6 bytes, and no Options are present",
        "24 bytes, and Options are present",
        "20 bytes, and Options are present",
        "60 bytes, and no Options are present",
      ],
      correctIndex: 1,
    },
    "day-11-part-1": {
      id: "day-11-part-1",
      topic: "Day 11 (Part 1)",
      question:
        "R1's G0/2 interface is configured with 192.168.1.1/24, so its routing table holds both a connected route to 192.168.1.0/24 and a local route to 192.168.1.1/32. A packet arrives destined for 192.168.1.1, which both routes match. What does R1 do?",
      options: [
        "Uses the 192.168.1.0/24 connected route and forwards the packet out of G0/2",
        "Uses the 192.168.1.1/32 local route and keeps the packet for itself",
        "Uses whichever of the two routes was added to the routing table first",
        "Drops the packet, because two routes matching the same destination is a conflict",
      ],
      correctIndex: 1,
    },
    "day-11-part-2": {
      id: "day-11-part-2",
      topic: "Day 11 (Part 2)",
      question:
        "R1 has a default route to 0.0.0.0/0 via 203.0.113.2, as well as several more specific static and connected routes. When does R1 actually forward a packet using that default route?",
      options: [
        "Only when no more specific route in the table matches the destination",
        "For every packet, because 0.0.0.0/0 matches every possible destination",
        "Only for packets whose destination is outside the router's own subnets",
        "Only when the interfaces used by its other routes are down",
      ],
      correctIndex: 0,
    },
  },
  "merge-sort": {
    "divide-and-conquer": {
      id: "divide-and-conquer",
      topic: "Divide and Conquer",
      question:
        "During the merge step, what happens if you forget to update the k pointer after placing an element into the merged array?",
      options: [
        "The loop goes out of bounds and crashes",
        "Every element overwrites the same slot, so only the last value written survives",
        "The array gets sorted in descending order instead",
        "Nothing, k updates automatically with i and j",
      ],
      correctIndex: 1,
    },
  },
};

export const getQuiz = (
  postSlug: string,
  sectionId: string,
): QuizQuestion | undefined => {
  return quizzes[postSlug]?.[sectionId];
};
