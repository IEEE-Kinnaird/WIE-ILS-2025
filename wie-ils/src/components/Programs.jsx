import React from 'react';

const DAY1_SCHEDULE = [
  {
    time: "9:00 – 9:50 AM",
    event: "Participants Check-In & Setting",
    room: "-"
  },
  {
    type: "header",
    event: "Opening Ceremony (New Auditorium)"
  },
  {
    time: "10:00 – 10:15 AM",
    event: "Welcome, Recitation and Anthems",
    room: "New Auditorium"
  },
  {
    time: "10:15 – 10:25 AM",
    event: "Principal's Address",
    room: "New Auditorium"
  },
  {
    time: "10:25 – 10:50 AM",
    event: "Speaker 1 : Usman Asif",
    room: "New Auditorium"
  },
  {
    time: "11:05 – 11:15 AM",
    event: "Guest of Honor : Engr.Muhammad Usman Asif",
    room: "New Auditorium"
  },
  {
    time: "11:15 AM – 11:25 PM",
    event: "Student Q&A",
    room: "New Auditorium"
  },
  {
    time: "11:30 AM – 12:00 PM",
    event: "Refreshments for Guests",
    room: "New Auditorium"
  },
  {
    time: "11:30 AM – 12:00 PM",
    event: "Networking and Break",
    room: "-"
  },
  {
    time: "12:00 - 12:15 PM",
    event: "Breifing for Workshop",
    room: "Amaltas Lab"
  },
  {
    time: "1:30 - 3:30 PM",
    event: "Data Science Workshop",
    room: "Amaltas Lab"
  }
];

const DAY2_SCHEDULE = [
  {
    type: "header",
    event: "Leadership Talks"
  },
  {
    time: "9:00 – 9:45 AM",
    event: "Participants Check-in ",
    room: "New Auditorium"
  },
  {
    time: "10:00 – 10:15 AM",
    event: "Welcome, Recitation and Anthems",
    room: "New Auditorium"
  },
  {
    time: "10:20 – 10:40 AM",
    event: "Leadership Talk 1: Annum Sadiq",
    room: "New Auditorium"
  },
  {
    time: "10:40 – 11:00 AM",
    event: "Leadership Talk 2: Ahmad Manzoor",
    room: "New Auditorium"
  },
  {
    time: "11:05 – 11:50 AM",
    event: "Panel Talk : Yaser Awan, Anoosh Shaigan, Fahalat Imran",
    room: "New Auditorium"
  },
  {
    time: "11:55 – 12:05 PM",
    event: "Guest Token Distribution",
    room: "New Auditorium"
  },
  {
    time: "12:10 – 12:20 PM",
    event: "Ending Note",
    room: "New Auditorium"
  },
  {
    time: "12:20 – 12:45 PM",
    event: "Refreshments for guests",
    room: "New Auditorium"
  },
  {
    time: "12:30 – 1:15 PM",
    event: "Break",
    room: "-"
  },
  {
    type: "header",
    event: "Closing Ceremony (New Auditorium)"
  },
  {
    time: "1:15 – 1:30 PM",
    event: "Welcome, Recitation and Anthems",
    room: "New Auditorium"
  },
  {
    time: "1:30 – 1:40 PM",
    event: "Principle's Note : Prof. Dr. Iram Anjum",
    room: "New Auditorium"
  },
  {
    time: "1:40 – 2:00 PM",
    event: "Keynote Talk : Mr. Umair Javed",
    room: "New Auditorium"
  },
  {
    time: "2:00 – 2:10 PM",
    event: "Chief Guest Speech : Dr. Shehla Javed",
    room: "New Auditorium"
  },
  {
    time: "2:10 – 2:30 PM",
    event: "Prize Distribution Ceremony",
    room: "New Auditorium"
  },
  {
    time: "2:30 – 2:40 PM",
    event: "Ending Note",
    room: "New Auditorium"
  },
  {
    time: "2:40 – 2:50 PM",
    event: "Group Pictures and Networking Session",
    room: "New Auditorium"
  },
  {
    time: "2:50 – 3:20 PM",
    event: "Refreshments for Guests",
    room: "New Auditorium"
  }
];

function ProgramTable({ title, schedule }) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white text-center mb-8">{title}</h2>
      
      <div className="bg-transparent backdrop-blur-lg rounded-lg shadow-2xl overflow-hidden border border-white/20">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-[0.5fr,1fr,2fr,1fr] bg-white/5">
          {/* Header */}
          <div className="p-4 font-semibold text-white text-center border-b border-white/20">No.</div>
          <div className="p-4 font-semibold text-white text-center border-b border-white/20">Time</div>
          <div className="p-4 font-semibold text-white text-center border-b border-white/20">Event</div>
          <div className="p-4 font-semibold text-white text-center border-b border-white/20">Room</div>

          {/* Schedule Items */}
          {schedule.map((item, index) => {
            if (item.type === "header") {
              return (
                <React.Fragment key={`header-${index}`}>
                  <div className="col-span-4 p-4 text-white text-center font-bold bg-white/10 border-t border-b border-white/20">
                    {item.event}
                  </div>
                </React.Fragment>
              );
            }
            
            // Get the number of header items before this index to adjust the numbering
            const headersBefore = schedule.slice(0, index).filter(i => i.type === "header").length;
            const adjustedIndex = index - headersBefore;
            
            return (
              <React.Fragment key={index}>
                <div className="p-4 text-white border-b  border-white/20 text-center hover:bg-white/10 transition-colors">
                  {adjustedIndex + 1}
                </div>
                <div className="p-4 text-white border-b border-white/20 text-center hover:bg-white/10 transition-colors">
                  {item.time}
                </div>
                <div className="p-4 text-white border-b border-white/20 text-center font-medium hover:bg-white/10 transition-colors">
                  {item.event}
                </div>
                <div className="p-4 text-white border-b border-white/20 text-center hover:bg-white/10 transition-colors">
                  {item.room}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {schedule.map((item, index) => {
            if (item.type === "header") {
              return (
                <div 
                  key={`header-${index}`} 
                  className="p-4 text-white text-center font-bold bg-white/10 border-t border-b border-white/20"
                >
                  {item.event}
                </div>
              );
            }
            
            // Get the number of header items before this index to adjust the numbering
            const headersBefore = schedule.slice(0, index).filter(i => i.type === "header").length;
            const adjustedIndex = index - headersBefore;
            
            return (
              <div 
                key={index} 
                className="p-4 border-b border-white/20 hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between mb-1">
                  <div className="text-white/80 text-sm">#{adjustedIndex + 1}</div>
                  <div className="text-white/80 text-sm">{item.time}</div>
                </div>
                <div className="text-white font-medium mb-1">{item.event}</div>
                <div className="text-white/80 text-sm">{item.room}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Programs() {
  return (
    <div className="container mx-auto px-4 py-12 relative min-h-screen bg-transparent">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        EVENT TIMELINE
      </h1>

      <ProgramTable title="Day 1 - April 7, 2025" schedule={DAY1_SCHEDULE} />
      <ProgramTable title="Day 2 - April 8, 2025" schedule={DAY2_SCHEDULE} />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl -z-10"></div>
    </div>
  );
}

export default Programs;