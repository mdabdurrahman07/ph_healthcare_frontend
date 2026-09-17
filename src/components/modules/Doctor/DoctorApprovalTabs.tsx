import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { Suspense } from "react";
import DoctorApprovalTable from "./DoctorApprovalTable";
import DoctorApprovalTableLoading from "./DoctorApprovalTableLoading";

const DoctorApprovalTabs = () => {
  return (
    <Tabs defaultValue="pending" className="w-full">
      <TabsList>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="approved">Approved</TabsTrigger>
        <TabsTrigger value="rejected">Rejected</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
      </TabsList>
      <Suspense fallback={<DoctorApprovalTableLoading />}>
        <DoctorApprovalTable />
      </Suspense>
    </Tabs>
  );
};

export default DoctorApprovalTabs;
