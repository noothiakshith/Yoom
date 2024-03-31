"use client";
import { useRouter } from "next/navigation";
import HomeCard from "./HomeCard";
import { useState } from 'react';


const MeetingTypeList = () => {
  const router = useRouter();
  const [meeting, setMeeting] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeeting('isJoiningMeeting')}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeeting('isScheduleMeeting')}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recording"
        description="Checkout your meeting recordings"
        handleClick={() => setMeeting('isJoiningMeeting')}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => router.push('/recordings')} // Using router.push for navigation
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
