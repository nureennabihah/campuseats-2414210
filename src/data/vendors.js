const vendors = [
  {
    id: "my-restaurant",
    name: "Brew & Bites",
    location: "Mahallah Asiah, Block A",
    openHours: "11:00 AM - 10:00 PM",
    isOpen: true,
    menu: [
      {
        id: "MENU01",
        name: "Mini Apam Balik",
        description:
          "Mini pancakes filled with crushed peanuts, sugar, and sweet corn.",
        price: 3,
        category: "Snacks",
        available: true,
      },
      {
        id: "MENU02",
        name: "Chicken Onigiri",
        description:
          "Japanese-style rice triangles fille dwith seasoned chicken and wrapped in seaweed.",
        price: 5,
        category: "Rice Snacks",
        available: true,
      },
      {
        id: "MENU03",
        name: "Sausage Roll",
        description: "A savoury pastry roll filled with sausage.",
        price: 3.5,
        category: "Bakery",
        available: true,
      },
      {
        id: "MENU04",
        name: "Popia Goreng",
        description:
          "Crispy spring rolls with vegetables and savoury seasoning.",
        price: 3,
        category: "Local Snacks",
        available: false,
      },
    ],
  },
  {
    id: "kafe-aminah",
    name: "Kafe Mahallah Aminah",
    location: "Mahallah Aminah, Ground Floor",
    openHours: "8:00 AM - 10:00 PM",
    isOpen: true,
    menu: [
      {
        id: "ami-1",
        name: "Nasi Ayam penyet",
        description: "Smashed fried chicked with sambal and rice",
        price: 7,
        category: "Rice",
        available: true,
      },
      {
        id: "ami-2",
        name: "Air Sirap Limau",
        description: "Refreshing lime syrup drink",
        price: 2.5,
        category: "Drinks",
        available: true,
      },
      {
        id: "ami-3",
        name: "Bubur Ayam",
        description:
          "Warm rice porridge topped with shredded chicken, fried shallots, and spring onions.",
        price: 5,
        category: "Rice & Porridge",
        available: true,
      },
    ],
  },
];

export default vendors;
