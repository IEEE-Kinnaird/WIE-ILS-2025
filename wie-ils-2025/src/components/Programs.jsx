import React from 'react';

const Programs = () => {
  const events = [
    { date: 'January 1, 2023', title: 'Event 1', description: 'Description for Event 1' },
    { date: 'February 15, 2023', title: 'Event 2', description: 'Description for Event 2' },
    { date: 'March 30, 2023', title: 'Event 3', description: 'Description for Event 3' },
    { date: 'April 22, 2023', title: 'Event 4', description: 'Description for Event 4' },
    { date: 'May 18, 2023', title: 'Event 5', description: 'Description for Event 5' },
  ];

  return (
    <div className="bg-purple-900 text-white py-10">
      <h1 className="text-4xl text-center mb-8">Event Timeline</h1>
      <div className="container mx-auto">
        <div className="flex flex-col">
          {events.map((event, index) => (
            <div className={`flex items-center justify-between mb-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} key={index}>
              <div className="w-1/4 text-center">
                <div className="bg-white text-black rounded-full p-2 shadow">{event.date}</div>
              </div>
              <div className="w-3/4 mx-4 p-4 border border-white rounded">
                <h2 className="text-2xl">{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;