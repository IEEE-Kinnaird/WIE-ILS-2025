import React from 'react';
import SpeakerCard from './SpeakerCard';
import speakersData from '../data/SpeakerData';

const ILSSpeakers = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Speakers
      </h2>

      <div className="flex flex-wrap justify-center">
        {[
          { title: "Opening Ceremony", speakers: speakersData.openingCeremony },
          { title: "Moderator", speakers: speakersData.moderators },
          { title: "Leadership Talks", speakers: speakersData.leadershipTalks },
          { title: "Panel Talk: Navigating through Cultural Bias in the Workplace", speakers: speakersData.panelTalk },
          { title: "Data Science Workshop", speakers: speakersData.datascienceWorkshop },
          { title: "Closing Ceremony", speakers: speakersData.closingCeremony }
        ].flatMap(section =>
          section.speakers.map(speaker => (
            <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={speaker.id}>
              <SpeakerCard
                name={speaker.name}
                title={speaker.title}
                role={section.title} // Pass the role to SpeakerCard
                linkedin={speaker.linkedin} // Pass LinkedIn URL
                img={speaker.img}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ILSSpeakers;