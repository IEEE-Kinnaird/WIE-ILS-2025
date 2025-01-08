// src/pages/Sponsors.jsx
import React from 'react';
import SponsorCard from '../components/SponserCard';
import sponsorsData from '../data/SponsorsData';

const Sponsors = () => {
    // Organize sponsors into columns
    const organizeColumns = () => {
      const firstColumn = sponsorsData.slice(0, 4);
      const secondColumn = sponsorsData.slice(4, 7);
      return [firstColumn, secondColumn];
    };
    const [firstColumn, secondColumn] = organizeColumns();
    return (
      <div className=" text-white py-10 px-5 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Meet Our Sponsors</h1>
        <div className="flex flex-col md:flex-col justify-center gap-x-12 ">
          <div className="flex flex-row gap-8 items-center mx-auto">
            {firstColumn.map((sponsor, index) => (
              <SponsorCard
                key={index}
                img={sponsor.img}
              />
            ))}
          </div>
          <div className="flex flex-row gap-8 items-center mt-16 mx-auto">
            {secondColumn.map((sponsor, index) => (
              <SponsorCard
                key={index}
                img={sponsor.img}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sponsors;