"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Suspense, useState } from "react";
import DoctorApprovalTable from "./DoctorApprovalTable";
import DoctorApprovalTableLoading from "./DoctorApprovalTableLoading";
import type {
  DoctorParams,
  DoctorVerificationStatus,
} from "@/types/doctor/doctor.type";
import { Input } from "@/components/ui/input";
import DoctorApprovalSheet from "./DoctorApprovalSheet";

const verificationStatus: ["ALL" | DoctorVerificationStatus, string][] = [
  ["APPROVED", "Approved"],
  ["PENDING", "Pending"],
  ["REJECTED", "Rejected"],
  ["ALL", "All"],
];

const DoctorApprovalTabs = () => {
  const [tab, setTab] = useState<"ALL" | DoctorVerificationStatus>("ALL");
  const [selectedId, setSelectedId] = useState("");

  const queryParams: DoctorParams = {
    page: 1,
    limit: 10,
    ...(tab === "ALL" ? {} : { verificationStatus: tab }),
  };
  return (
    <>
      <div className="flex justify-between my-5">
        <div>
          <Input type="search" placeholder="Search by name or email" />
        </div>
        <div>
          <Tabs
            value={tab}
            onValueChange={(value) => setTab(value)}
            className="w-full"
          >
            <TabsList>
              {verificationStatus.map(([value, label]) => (
                <TabsTrigger value={value} key={value}>
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      <Suspense fallback={<DoctorApprovalTableLoading />}>
        <DoctorApprovalTable {...queryParams} handleReview={setSelectedId} />
      </Suspense>
      <DoctorApprovalSheet
        selectedId={selectedId}
        onClose={() => setSelectedId("")}
        {...queryParams}
      />
    </>
  );
};

export default DoctorApprovalTabs;
