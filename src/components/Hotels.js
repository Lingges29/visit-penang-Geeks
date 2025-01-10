import React from "react";
import Card from "./Card";
import Section from "./Section";

const Hotels = () => {
  const hotels = [
    {
      name: "Hotel Equatorial Penang",
      description: "A luxurious stay with a view.",
      image: "https://images.trvl-media.com/lodging/1000000/530000/523500/523427/1509eecc.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      link: "https://www.equatorialpenang.com/",
    },
    {
      name: "The Prestige Hotel",
      description: "A modern boutique hotel.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/c5/fd/f6/the-prestige-hotel-facade.jpg?w=700&h=-1&s=1",
      link: "https://www.theprestige.my/",
    },
    {
      name: "Eastern & Oriental Hotel",
      description: "A colonial-style luxury hotel.",
      image: "https://pix10.agoda.net/hotelImages/5384/-1/5a1cbad34589f0aef358dbf2322fcef5.jpg?ca=9&ce=1&s=414x232&ar=16x9",
      link: "https://www.eohotels.com/",
    },
    {
      name: "Bayview Hotel Georgetown Penang",
      description: "An affordable hotel located near George Town, with a spectacular view of the island.",
      image: "https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/177/2017/09/04053539/bayview-georgetown-penang-hotel-home-slideshow-1-800x436.jpg",
      link: "https://www.bayviewhotel.com.my/",
    },
  ];

  return (
    <div className="fade-in">
      <Section id="hotels" title="Hotels">
        {hotels.map((hotel, index) => (
          <Card 
          key={index} 
          img={hotel.image} 
          title={hotel.name} 
          description={hotel.description} 
          link={hotel.link} 
          />
        ))}
      </Section>
    </div>
  );
};


export default Hotels;