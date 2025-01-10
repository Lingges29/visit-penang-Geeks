import React from "react";
import Card from "./Card";
import Section from "./Section";

const TouristSpots = () => {
  const spots = [
    {
      name: "Penang Hill",
      description: "A scenic hilltop view of Penang.",
      image: "https://pyt-blogs.gumlet.io/2020/06/8351372717_497aec5ff3_b.jpg?w=1152&h=440&mode=crop&crop=entrophy&dpr=1&q=40",
      link: "https://www.penanghill.gov.my/index.php/en/",
    },
    {
      name: "Kek Lok Si Temple",
      description: "A stunning Buddhist temple.",
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/7089/images/647c4e-62-dca-e12d-4c3f2cff0261_Cover_Photo.png",
      link: "https://kekloksitemple.com/",
    },
    {
      name: "GeorgeTown Street Art",
      description: "Unique murals in George Town.",
      image: "https://image-tc.galaxy.tf/wijpeg-c92j35cf0m6i9x8k4svsip2vv/penang-armenian-street-art-mural_wide.jpg?crop=0%2C102%2C1980%2C1114&width=1100",
      link: "https://streetartpenang.com/",
    },
    {
      name: "Ferringhi Bay",
      description: "A famous beach destination known for its water sports and resorts.",
      image: "https://travel2penang.org/wp-content/uploads/2024/09/ferringhibay03-1-1024x768.jpg",
      link: "https://ferringhibay.com/",
    },
  ];

  return (
    <div className="fade-in">
      <Section id="tourist-spots" title="Tourist Spots">
        {spots.map((spot, index) => (
          <Card key={index} img={spot.image} title={spot.name} description={spot.description} link={spot.link} />
        ))}
      </Section>
    </div>
  );
};

export default TouristSpots;