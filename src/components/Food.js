import React from "react";
import Card from "./Card";
import Section from "./Section";

const Food = () => {
  const foods = [
      {
        name: "Char Kuey Teow",
        description: "A flavorful noodle dish.",
        image: "https://www.mypenang.gov.my/uploads/page/40/images/Penang_FoodLifestyle_FB_CharKueyTeow.jpg",
        link: "https://www.mypenang.gov.my/food-lifestyle/food-beverages/char-koay-teow/?lg=en",
      },
      {
        name: "Penang Laksa",
        description: "A spicy, tangy fish-based soup.",
        image: "https://www.elmundoeats.com/wp-content/uploads/2024/03/Penang-asam-laksa-in-a-bowl.jpg",
        link: "https://guide.michelin.com/my/en/article/dining-out/how-to-make-the-perfect-assam-laksa-penang-malaysia",
      },
      {
        name: "Roti Canai",
        description: "Flaky flatbread served with curry.",
        image: "https://i0.wp.com/penang-local.com/directorist/wp-content/uploads/2023/06/Roti-canai.jpg?fit=1024%2C680&ssl=1",
        link: "https://www.globetrove.com/roti-canai-in-penang/",
      },
      {
        name: "Nasi Kandar",
        description: "A popular Penang dish of rice served with a variety of curries and meats.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/93/af/nasi-kandar-rice-with.jpg?w=1200&h=-1&s=1",
        link: "https://www.penang-traveltips.com/nasi-kandar.htm",
      },
  ];

  return (
    <div className="fade-in">
      <Section id="foods" title="Foods">
        {foods.map((food, index) => (
          <Card key={index} img={food.image} title={food.name} description={food.description} link={food.link} />
        ))}
      </Section>
    </div>
  );
};
export default Food;
