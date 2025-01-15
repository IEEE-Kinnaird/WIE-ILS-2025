import React from 'react';

const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Sample events with some slots empty to create spaces
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
    <>
      <div className="container mx-auto px-4 py-12 relative">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Event Timeline
        </h1>

        <div className="bg-transparent backdrop-blur-lg rounded-lg overflow-hidden shadow-2xl">
          {/* Header Row with Times */}
          <div className="grid grid-cols-7 gap-0.5 bg-purple-300/10">
            <div className="p-4 bg-white opacity-60 text-black font-semibold">Days</div>
            {TIMES.map((time) => (
              <div key={time} className="p-4 bg-white opacity-60 text-black font-semibold">
                {time}
              </div>
            ))}
          </div>

          {/* Days and Events Grid */}
          <div className="divide-y bg-transparent">
            {DAYS.map((day) => (
              <div key={day} className="grid grid-cols-7 gap-3">
                {/* Day Column */}
                <div className="p-4 font-medium text-black bg-white opacity-60">
                  {day}
                </div>
                {/* Time Slots */}
                {TIMES.map((time) => (
                  <div
                    key={`${day}-${time}`}
                    className={`p-4 transition-colors ${
                      EVENTS[day]?.[time]
                        ? "bg-transparent border border-white  text-white"
                        : "bg-transparent"
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
    </>
  );
}

export default Programs;