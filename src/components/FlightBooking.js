import React from "react";
import Card from "./Card"; 
import Section from "./Section"; 

const Flights = () => {
   const flights = [
    {
      airline: "Malaysia Airlines",
      description: "The national carrier of Malaysia, offering international and domestic flights.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_S-B_JtW0wLUjhp-z1-jMosdRJbHT5bjtg&s",
      link: "https://www.malaysiaairlines.com",
    },
    {
      airline: "AirAsia",
      description: "A low-cost carrier offering both domestic and international flights.",
      image: "https://yt3.googleusercontent.com/Hc9KZAlLjb5drV020K6sWANgR9nj9OyhcanNfPL3dyIA_CgUM_tVdUAOWTB8Mp13cHQcwz3w4iU=s900-c-k-c0x00ffffff-no-rj",
      link: "https://www.airasia.com",
    },
    {
      airline: "Malindo Air",
      description: "A hybrid airline that offers affordable flights with premium services.",
      image: "https://logos-world.net/wp-content/uploads/2023/01/Malindo-Air-Logo.png",
      link: "https://www.malindoair.com",
    },
    {
      airline: "Firefly",
      description: "A regional carrier offering flights to destinations in Malaysia and Southeast Asia.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Firefly_Logo.svg/1200px-Firefly_Logo.svg.png",
      link: "https://www.fireflyz.com.my",
    },
  ];

  return (
    <div className="fade-in">
      <Section id="flights" title="Flights">
        {flights.map((flight, index) => (
          <Card 
            key={index} 
            img={flight.image} 
            title={flight.airline} 
            description={flight.description} 
            link={flight.link} 
          />
        ))}
      </Section>
    </div>
  );
};

export default Flights;
