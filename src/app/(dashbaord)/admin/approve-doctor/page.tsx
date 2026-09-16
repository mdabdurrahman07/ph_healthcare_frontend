import DoctorApprovalTable from "@/components/modules/Doctor/DoctorApprovalTable";
import DoctorApprovalTabs from "@/components/modules/Doctor/DoctorApprovalTabs";
import React from "react";

const ApproveDoctorPage = () => {
  return (
    <div>
      <div>
        <h1>Doctor Approval</h1>
        <p>Please review and make sure the given data is real</p>
      </div>
      <DoctorApprovalTabs />
    </div>
  );
};

export default ApproveDoctorPage;
