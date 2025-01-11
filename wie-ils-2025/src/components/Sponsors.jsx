// // src/pages/Sponsors.jsx
// import React from 'react';
// import SponsorCard from './SponsorCard';
// import sponsorsData from '../data/SponsorsData';

// const Sponsors = () => {
//     // Organize sponsors into columns
//     const organizeColumns = () => {
//       const firstColumn = sponsorsData.slice(0, 4);
//       const secondColumn = sponsorsData.slice(4, 7);
//       return [firstColumn, secondColumn];
//     };
//     const [firstColumn, secondColumn] = organizeColumns();
//     return (
//       <div className=" text-white py-10 px-5 min-h-screen">
//         <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Meet Our Sponsors</h1>
//         <div className="flex flex-col md:flex-col justify-center gap-x-12 ">
//           <div className="flex flex-row gap-8 items-center mx-auto">
//             {firstColumn.map((sponsor, index) => (
//               <SponsorCard
//                 key={index}
//                 img={sponsor.img}
//               />
//             ))}
//           </div>
//           <div className="flex flex-row gap-8 items-center mt-16 mx-auto">
//             {secondColumn.map((sponsor, index) => (
//               <SponsorCard
//                 key={index}
//                 img={sponsor.img}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Sponsors;

// Sponsors.jsx

// import React from 'react';
// import SponsorCard from './SponsorCard';
// import sponsorsData from '../data/SponsorsData';

// const Sponsors = () => {
//     const organizeColumns = () => {
//       const firstColumn = sponsorsData.slice(0, 4);
//       const secondColumn = sponsorsData.slice(4, 7);
//       return [firstColumn, secondColumn];
//     };
//     const [firstColumn, secondColumn] = organizeColumns();

//     return (
//       <div className="text-white py-10 px-5 min-h-screen">
//         <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Meet Our Sponsors</h1>
//         <div className="flex flex-col justify-center gap-x-12">
//           <div className="flex flex-row gap-8 items-center mx-auto flex-wrap justify-center">
//             {firstColumn.map((sponsor, index) => (
//               <SponsorCard
//                 key={index}
//                 img={sponsor.img}
//               />
//             ))}
//           </div>
//           <div className="flex flex-row gap-8 items-center mt-16 mx-auto flex-wrap justify-center">
//             {secondColumn.map((sponsor, index) => (
//               <SponsorCard
//                 key={index}
//                 img={sponsor.img}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Sponsors;

// Card without fixed data

import React from 'react';
import SponsorCard from './SponsorCard';
import sponsorsData from '../data/SponsorsData';

const Sponsors = () => {
    // Organize sponsors into multiple rows dynamically
    const organizeColumns = (data, itemsPerRow = 4) => {
        const rows = [];
        for (let i = 0; i < data.length; i += itemsPerRow) {
            rows.push(data.slice(i, i + itemsPerRow));
        }
        return rows;
    };

    const rows = organizeColumns(sponsorsData, 4); // Adjust itemsPerRow if needed

    return (
        <div className="text-white py-10 px-5 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">Meet Our Sponsors</h1>
            <div className="flex flex-col justify-center gap-y-16">
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex flex-row gap-12 items-center mx-auto flex-wrap ${
                            rowIndex % 2 === 0
                                ? 'justify-center grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto ' // Center-align odd-indexed rows
                                : 'justify-start pl-30 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto ' // Left-shift even-indexed rows
                        }`}
                    >
                        {row.map((sponsor, cardIndex) => (
                            <SponsorCard key={cardIndex} img={sponsor.img} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;