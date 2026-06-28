import { generateRandomId } from "./generate-random-id";

export const SPECS = [
  {
    id: generateRandomId(),
    title: "Gaming PC 👾",
    list: [
      { id: generateRandomId(), key: "CPU", value: "Intel Core i9-11900KF" },
      { id: generateRandomId(), key: "RAM", value: "32GB" },
      { id: generateRandomId(), key: "GPU", value: "NVIDIA GeForce RTX 3060" },
      { id: generateRandomId(), key: "OS", value: "Windows 11" },
      { id: generateRandomId(), key: "Storage", value: "1TB SSD" },
    ],
    sellingSoon: false,
  },
  {
    id: generateRandomId(),
    title: 'M2 Pro MacBook Pro 16" 💻',
    list: [
      {
        id: generateRandomId(),
        key: "Display",
        value: "16-inch Liquid Retina XDR display",
      },
      { id: generateRandomId(), key: "Chip", value: "Apple M2 Pro Chip" },
      { id: generateRandomId(), key: "Memory", value: "16GB" },
      { id: generateRandomId(), key: "Storage", value: "512GB SSD" },
      { id: generateRandomId(), key: "OS", value: "macOS Tahoe" },
    ],
    sellingSoon: false,
  },
  {
    id: generateRandomId(),
    title: "Home Server 🖥️",
    list: [
      { id: generateRandomId(), key: "CPU", value: "Core i5-8500T" },
      { id: generateRandomId(), key: "GPU", value: "Intel UHD Graphics 630" },
      { id: generateRandomId(), key: "Series", value: "Dell Optiplex 7060" },
      { id: generateRandomId(), key: "Storage", value: "256GB SSD" },
      { id: generateRandomId(), key: "OS", value: "Ubuntu" },
      { id: generateRandomId(), key: "RAM", value: "16GB" },
    ],
    sellingSoon: false,
  },
  {
    id: generateRandomId(),
    title: "Gear ⚙️",
    list: [
      {
        id: generateRandomId(),
        key: "Primary Monitor",
        value: 'Samsung UR55 4K IPS HDR10 28"',
      },
      {
        id: generateRandomId(),
        key: "Console",
        value: "Nintendo Switch",
      },
      {
        id: generateRandomId(),
        key: "Secondary Monitor",
        value: 'AOC 27B2H 27"',
      },
      {
        id: generateRandomId(),
        key: "Keyboard",
        value: "Logitech G413 TKL SE",
      },
      {
        id: generateRandomId(),
        key: "Mouse",
        value: "RAZER DeathAdder",
      },
      {
        id: generateRandomId(),
        key: "Headset",
        value: "CORSAIR HS65 SURROUND",
      },
      { id: generateRandomId(), key: "Earbuds", value: "AirPods Pro" },
      { id: generateRandomId(), key: "Watch", value: "Apple Watch Series 3" },
      { id: generateRandomId(), key: "Primary phone", value: "iPhone 15" },
      { id: generateRandomId(), key: "Secondary phone", value: "iPhone XR" },
    ],
    sellingSoon: false,
  },
];
