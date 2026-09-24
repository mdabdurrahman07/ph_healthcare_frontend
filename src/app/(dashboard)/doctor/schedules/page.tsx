import DocScheduleListLoading from "@/components/modules/Doctor/DoctorSchedule/DocScheduleListLoading";
import DoctorScheduleList from "@/components/modules/Doctor/DoctorSchedule/DoctorScheduleList";
import React from "react";

const SchedulePage = () => {
  return (
    <section className="p-5">
      <div>
        <h1 className="text-2xl">My schedules</h1>
        <p>Create schedules, publish them for booking, or delete drafts.</p>
      </div>
      <DoctorScheduleList/>
    </section>
  );
};

export default SchedulePage;
