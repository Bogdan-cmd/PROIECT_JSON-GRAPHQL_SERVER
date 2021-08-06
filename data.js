module.exports= {
  categories: [
    {
        id: 1,
        name : "Breakfast"  
    },
    {
        id : 2,
        name : "Lunch"
    },
    {
      id: 3,
      name : "Dinner"
      
  }
],
 
menus: [
  {
    id: 1,
    price:  "10.00",
    name: "Scrambled eggs",
    description: "with Tomatos and cheese",
    category_id: 1, 
    image_url: "./static/Scrambled eggs.jpg"
  },
  {
    id: 2,
    price: "12.00",
    name: "Goat",
    description: "with Vegetables, Macaroni and Cheese",
    category_id: 2,
    image_url: "./static/Goat.jpg"
  },
  {
    id: 3,
    price:  "9.00",
    name: "Pasta",
    description: "with Baked Chicken",
    category_id: 2,
    image_url: "./static/Pasta.jpg"
  },
  {
    id:4,
    price:" 12.00",
    name: "Seafood Pasta",
    description: "with Vegetables, Macaroni and Cheese",
    category_id: 1,
    image_url: "./static/Seafood Pasta.jpg"
  },
  {
    id:5,
    price:  "70.00",
    name: "Sarmale",
    description: "mancare traditionala din Romania",
    category_id: 3,
    image_url: "./static/Sarmale.jpg"
  },
  {
      id:6,
      price:  "1.50",
      name: "Fantail Jumbo Shrimp",
      description: "Each.",
      category_id: 1,
      image_url: "./static/Fantail_Jumbo_Shrimp.jpg"
    },
    {
      id: 7,
      price:  "5.00",
      name: "Yat Gaw Mein Quart",
      description: "Pork or chicken.",
      category_id: 3,
      image_url: "./static/Yat Gaw Mein Quart.jpg"
    },
    {
      id: 8,
      price:  "25.25",
      name: "Hunan Chicken",
      description: "Beef or shrimp.",
      category_id: 2,
      image_url: "./static/Hunan Chicken.jpg"
         }
  ]


  }