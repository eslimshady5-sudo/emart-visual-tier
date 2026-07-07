export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isNew?: boolean;
  onSale?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Smartwatch Pro X",
    description: "The latest in wearable technology. Stay connected and track your fitness with style.",
    price: 249.99,
    category: "Electronics",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/smartwatch-d146cd1c-1783440434949.webp",
    rating: 5,
    isNew: true,
  },
  {
    id: "2",
    name: "Leather Backpack",
    description: "A stylish and durable backpack for your daily commute or weekend adventures.",
    price: 129.99,
    category: "Fashion",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/leather-backpack-8db1e781-1783440435653.webp",
    rating: 4,
  },
  {
    id: "3",
    name: "Wireless Headphones",
    description: "Immerse yourself in high-fidelity sound with these comfortable over-ear headphones.",
    price: 199.99,
    category: "Electronics",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/wireless-headphones-b99403a7-1783440435132.webp",
    rating: 5,
    onSale: true,
  },
  {
    id: "4",
    name: "Wooden Desk Lamp",
    description: "A modern and minimalist desk lamp to brighten up your workspace.",
    price: 79.99,
    category: "Home",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/desk-lamp-4edfe7cc-1783440435319.webp",
    rating: 4,
  },
  {
    id: "5",
    name: "Coffee Grinder",
    description: "Get the perfect grind for your coffee beans with this high-performance electric grinder.",
    price: 89.99,
    category: "Home",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/coffee-grinder-1c5c2754-1783440434946.webp",
    rating: 5,
    isNew: true,
  },
  {
    id: "6",
    name: "Ceramic Plant Pots",
    description: "A set of three minimalist ceramic plant pots to bring some greenery to your home.",
    price: 49.99,
    category: "Home",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/ceramic-plant-pots-bba47a74-1783440435133.webp",
    rating: 4,
  },
  {
    id: "7",
    name: "Ergo Office Chair",
    description: "A comfortable and stylish office chair with ergonomic support.",
    price: 349.99,
    category: "Furniture",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/office-chair-34aa903e-1783440435984.webp",
    rating: 5,
  },
  {
    id: "8",
    name: "Bluetooth Speaker",
    description: "A sleek, portable bluetooth speaker with rich sound.",
    price: 149.99,
    category: "Electronics",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/40ef74d6-776c-40c8-8df7-2ad309455e88/bluetooth-speaker-360b7661-1783440437718.webp",
    rating: 4,
    onSale: true,
  },
];
