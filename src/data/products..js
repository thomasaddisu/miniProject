const products = [

  {
    id: 1,
    name: "Wireless Headphones",
    category: "electronics",
    price: 79.99,
    description: "Premium noise-canceling wireless headphones with 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    stock: 15
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "electronics",
    price: 199.99,
    description: "Fitness tracking smartwatch with heart rate monitor and GPS.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    stock: 8
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "electronics",
    price: 34.99,
    description: "Ergonomic aluminum laptop stand for better posture.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    stock: 25
  },
  {
    id: 4,
    name: "Wireless Mouse",
    category: "electronics",
    price: 29.99,
    description: "Ergonomic wireless mouse with precision tracking.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    stock: 30
  },

  // Clothing
  {
    id: 5,
    name: "Cotton T-Shirt",
    category: "clothing",
    price: 24.99,
    description: "100% organic cotton t-shirt, soft and comfortable.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    stock: 50
  },
  {
    id: 6,
    name: "Denim Jacket",
    category: "clothing",
    price: 89.99,
    description: "Classic blue denim jacket with a modern fit.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    stock: 12
  },
  {
    id: 7,
    name: "Running Shoes",
    category: "clothing",
    price: 119.99,
    description: "Lightweight running shoes with cushioned sole.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    stock: 20
  },
  {
    id: 8,
    name: "Baseball Cap",
    category: "clothing",
    price: 19.99,
    description: "Adjustable baseball cap with embroidered logo.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
    stock: 40
  },

  // Home
  {
    id: 9,
    name: "Coffee Maker",
    category: "home",
    price: 69.99,
    description: "Programmable coffee maker with thermal carafe.",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    stock: 10
  },
  {
    id: 10,
    name: "Desk Lamp",
    category: "home",
    price: 39.99,
    description: "LED desk lamp with adjustable brightness and color temperature.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    stock: 18
  },
  {
    id: 11,
    name: "Throw Pillow Set",
    category: "home",
    price: 44.99,
    description: "Set of 2 decorative throw pillows with soft covers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmqegBVKg3N-WjOh3WXLxtW2iH-Q1hKkblQ&s",
    stock: 22
  },
  {
    id: 12,
    name: "Wall Clock",
    category: "home",
    price: 29.99,
    description: "Modern minimalist wall clock with silent movement.",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&h=500&fit=crop",
    stock: 15
  },

  // Books
  {
    id: 13,
    name: "JavaScript Mastery",
    category: "books",
    price: 34.99,
    description: "Complete guide to modern JavaScript programming.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop",
    stock: 35
  },
  {
    id: 14,
    name: "Design Thinking",
    category: "books",
    price: 29.99,
    description: "Learn creative problem-solving and user-centered design.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=500&fit=crop",
    stock: 28
  },
  {
    id: 15,
    name: "Cooking Essentials",
    category: "books",
    price: 24.99,
    description: "Master the fundamentals of cooking with 100+ recipes.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop",
    stock: 30
  },

  {
    id: 16,
    name: "Handcrafted Cotton Keyboard",
    category: "electronics",
    price: 614,
    description: "Black handcrafted cotton keyboard",
    image: "https://picsum.photos/seed/16/500/500",
    stock: 12
  },
  {
    id: 17,
    name: "Handcrafted Fresh Shirt",
    category: "fashion",
    price: 404,
    description: "Black handcrafted fresh shirt",
    image: "https://picsum.photos/seed/17/500/500",
    stock: 20
  },
  {
    id: 18,
    name: "Sleek Steel Keyboard",
    category: "electronics",
    price: 64,
    description: "White sleek steel keyboard",
    image: "https://picsum.photos/seed/18/500/500",
    stock: 18
  },
  {
    id: 19,
    name: "Licensed Frozen Pizza",
    category: "food",
    price: 492,
    description: "Cyan licensed frozen pizza",
    image: "https://picsum.photos/seed/19/500/500",
    stock: 25
  },
  {
    id: 20,
    name: "Ergonomic Frozen Mouse",
    category: "electronics",
    price: 56,
    description: "Silver ergonomic frozen mouse",
    image: "https://picsum.photos/seed/20/500/500",
    stock: 30
  },
  {
    id: 21,
    name: "Practical Rubber Soap",
    category: "personal care",
    price: 551,
    description: "Gold practical rubber soap",
    image: "https://picsum.photos/seed/21/500/500",
    stock: 10
  },
  {
    id: 22,
    name: "Refined Soft Chips",
    category: "snacks",
    price: 519,
    description: "Lavender refined soft chips",
    image: "https://picsum.photos/seed/22/500/500",
    stock: 15
  },
  {
    id: 23,
    name: "Incredible Rubber Towels",
    category: "home",
    price: 627,
    description: "Gold incredible rubber towels",
    image: "https://picsum.photos/seed/23/500/500",
    stock: 8
  },
  {
    id: 24,
    name: "Tasty Fresh Bacon",
    category: "food",
    price: 830,
    description: "Orchid tasty fresh bacon",
    image: "https://picsum.photos/seed/24/500/500",
    stock: 12
  },
  {
    id: 25,
    name: "Handmade Rubber Bacon",
    category: "food",
    price: 862,
    description: "Maroon handmade rubber bacon",
    image: "https://picsum.photos/seed/25/500/500",
    stock: 7
  },
  {
    id: 26,
    name: "Licensed Granite Salad",
    category: "food",
    price: 828,
    description: "Lavender licensed granite salad",
    image: "https://picsum.photos/seed/26/500/500",
    stock: 14
  },
  {
    id: 27,
    name: "Licensed Frozen Chips",
    category: "snacks",
    price: 354,
    description: "Maroon licensed frozen chips",
    image: "https://picsum.photos/seed/27/500/500",
    stock: 22
  },
  {
    id: 28,
    name: "Rustic Concrete Towels",
    category: "home",
    price: 149,
    description: "Yellow rustic concrete towels",
    image: "https://picsum.photos/seed/28/500/500",
    stock: 9
  },
  {
    id: 29,
    name: "Awesome Soft Cheese",
    category: "food",
    price: 138,
    description: "Mint green awesome soft cheese",
    image: "https://picsum.photos/seed/29/500/500",
    stock: 18
  },
  {
    id: 30,
    name: "Sleek Concrete Ball",
    category: "home",
    price: 761,
    description: "Mint green sleek concrete ball",
    image: "https://picsum.photos/seed/30/500/500",
    stock: 6
  },
  {
    id: 31,
    name: "Licensed Granite Car",
    category: "toys",
    price: 163,
    description: "Black licensed granite car",
    image: "https://picsum.photos/seed/31/500/500",
    stock: 20
  },
  {
    id: 32,
    name: "Small Soft Salad",
    category: "food",
    price: 838,
    description: "Fuchsia small soft salad",
    image: "https://picsum.photos/seed/32/500/500",
    stock: 10
  },
  {
    id: 33,
    name: "Awesome Soft Soap",
    category: "personal care",
    price: 690,
    description: "Ivory awesome soft soap",
    image: "https://picsum.photos/seed/33/500/500",
    stock: 15
  },
  {
    id: 34,
    name: "Small Granite Towels",
    category: "home",
    price: 978,
    description: "Teal small granite towels",
    image: "https://picsum.photos/seed/34/500/500",
    stock: 12
  },
  {
    id: 35,
    name: "Intelligent Granite Towels",
    category: "home",
    price: 557,
    description: "Blue intelligent granite towels",
    image: "https://picsum.photos/seed/35/500/500",
    stock: 16
  }
];

export default products;
