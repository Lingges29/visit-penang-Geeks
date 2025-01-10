import React from "react";
import Card from "./Card";  
import Section from "./Section"; 

const Restaurant = () => {
  // Array of famous restaurants in Penang
  const restaurants = [
    {
      name: "Hameediyah Restaurant Penang",
      description: "One of the oldest nasi kandar restaurants in Penang, famous for its rich and flavorful curries.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkTd7I-AjO0vEqt-bnG5ZR-nLIAQ9-oWOXw&s",
      link: "https://www.facebook.com/Hameediyah-restaurant-penang-211875533057443/",
    },
    {
      name: "Gurney Drive Hawker Centre",
      description: "A popular place for Penang’s famous street food, offering a wide variety of local dishes.",
      image: "https://gurneydrivehawkercentre.myfoodcourt.info/img/PortalImage/661/Portal/661_unnamed.jpg",
      link: "https://gurneydrivehawkercentre.myfoodcourt.info/",
    },
    {
      name: "Siam Road Charcoal Char Kuey Teow",
      description: "Famous for its charcoal fried Char Kway Teow, a must-try dish in Penang.",
      image: "https://myweekendplan.asia/wp-content/uploads/2022/08/Siam-Road-Char-Kuey-Teow-1-1-819x1024.jpg",
      link: "https://www.facebook.com/Siam-Road-Charcoal-Char-Kway-Teow-345746257631992/",
    },
    {
      name: "Penang Road Famous Teochew Chendul",
      description: "A popular place to enjoy Penang's signature dessert, the refreshing chendul.",
      image: "https://chendul.my/wp-content/uploads/2022/07/penang-chendul-logo.png",
      link: "https://chendul.my/",
    },
  ];

  return (
    <div className="fade-in">
      <Section id="restaurants" title="Famous Restaurants in Penang">
        {restaurants.map((restaurant, index) => (
          <Card 
            key={index} 
            img={restaurant.image} 
            title={restaurant.name} 
            description={restaurant.description} 
            link={restaurant.link} 
          />
        ))}
      </Section>
    </div>
  );
};

export default Restaurant;
