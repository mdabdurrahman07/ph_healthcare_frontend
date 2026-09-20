"use client"
import { ScheduleParams, ScheduleStatus } from '@/types/doctor/schedule/schedule.types';
import React, { Suspense, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocScheduleListLoading from './DocScheduleListLoading';
import DoctorScheduleTable from './DoctorScheduleTable';
import DoctorScheduleCreateDialog from './DoctorScheduleCreateDialog';
const statuses: ["ALL" | ScheduleStatus, string][] = [
  ["ALL", "All"],
  ["DRAFT", "Draft"],
  ["PUBLISHED", "Published"],
];

const DoctorScheduleList = () => {
      const [tab, setTab] = useState<"ALL" | ScheduleStatus>("ALL");

  const queryParams: ScheduleParams = {
    page: 1,
    limit: 10,
    sortBy: "startDateTime",
    sortOrder: "asc",
    ...(tab === "ALL" ? {} : { status: tab }),
  };
    return (
         <>
      <div className="my-5 flex justify-between gap-3">
        <Tabs value={tab} onValueChange={(value) => setTab(value)}>
          <TabsList>
            {statuses.map(([value, label]) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <DoctorScheduleCreateDialog />
      </div>

      <Suspense fallback={<DocScheduleListLoading />}>
        <DoctorScheduleTable {...queryParams} />
      </Suspense>
    </>
    );
};

export default DoctorScheduleList;