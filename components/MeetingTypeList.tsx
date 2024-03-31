"use client";
import { useRouter } from "next/navigation";
import HomeCard from "./HomeCard";
import { useState } from 'react';
import MeetingModal from "./MeetingModal";


const MeetingTypeList = () => {
  const createMeeing = () => {
  }
  const router = useRouter();
  const [meeting, setMeeting] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeeting('isInstantMeeting')}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="plan your meeting"
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
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Start an instant meeting"
        handleClick={()=>setMeeting('isJoiningMeeting')} // Using router.push for navigation
        className="bg-yellow-1"
      />
      <MeetingModal
        isOpen={meeting === 'isInstantMeeting'}
        onClose={() => setMeeting(undefined)}
        title="Start an instant meeing"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeing} />
    </section> 
  );
};

export default MeetingTypeList;
