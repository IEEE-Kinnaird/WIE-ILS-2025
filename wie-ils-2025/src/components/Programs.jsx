import React from 'react';

const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const EVENTS = {
  "Monday": {
    "9:00 AM": "Opening Ceremony",
    "11:00 AM": "Technical Session",
    "2:00 PM": "Workshop A"
  },
  "Tuesday": {
    "10:00 AM": "Keynote Speech",
    "1:00 PM": "Panel Discussion"
  },
  "Wednesday": {
    "9:00 AM": "Registration",
    "11:00 AM": "Workshop B",
    "2:00 PM": "Technical Talk"
  },
  "Thursday": {
    "10:00 AM": "Industry Panel",
    "1:00 PM": "Workshop C"
  },
  "Friday": {
    "9:00 AM": "Team Meeting",
    "12:00 PM": "Lunch & Learn",
    "2:00 PM": "Closing Session"
  },
  "Saturday": {
    "10:00 AM": "Special Workshop",
    "1:00 PM": "Networking Event"
  }
};

function Programs() {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Event Timeline
      </h1>

      <div className="bg-transparent backdrop-blur-lg rounded-lg shadow-2xl">
        {/* Header Row with Times */}
        <div className="grid grid-cols-7 gap-4 ">
          <div className="p-6 font-semibold text-[#28112E] bg-white opacity-70 text-center">Days</div>
          {TIMES.map((time) => (
            <div key={time} className="p-4 flex justify-center items-center w-52 font-semibold bg-white opacity-70  text-[#28112E] text-center">

              {time}
            </div>
          ))}
        </div>

        {/* Days and Events Grid */}
        <div className="bg-transparent">
          {DAYS.map((day) => (
            <div key={day} className="grid grid-cols-7 gap-4 mt-4">
              {/* Day Column */}
              <div className="flex items-center justify-center h-16 font-medium text-center text-[#28112E] bg-white opacity-70">
                {day}
              </div>
              {/* Time Slots */}
              {TIMES.map((time) => (
                <div
                  key={`${day}-${time}`}
                  className={`flex items-center justify-center h-16 p-6 transition-transform duration-200 ease-in-out bg-transparent border border-white text-white rounded hover:scale-105 ${
                    EVENTS[day]?.[time] ? "text-white" : "text-transparent"
                  }`}
                >
                  {EVENTS[day]?.[time] || ""}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;