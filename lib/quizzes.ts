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
