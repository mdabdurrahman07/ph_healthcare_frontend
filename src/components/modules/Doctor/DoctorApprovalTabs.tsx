"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ChangeEvent, Suspense, useState } from "react";
import DoctorApprovalTable from "./DoctorApprovalTable";
import DoctorApprovalTableLoading from "./DoctorApprovalTableLoading";
import type {
  DoctorParams,
  DoctorVerificationStatus,
} from "@/types/doctor/doctor.type";
import { Input } from "@/components/ui/input";
import DoctorApprovalSheet from "./DoctorApprovalSheet";
import { useDebounce } from "@/hooks/debounce/debounce.hook";

const verificationStatus: ["ALL" | DoctorVerificationStatus, string][] = [
  ["APPROVED", "Approved"],
  ["PENDING", "Pending"],
  ["REJECTED", "Rejected"],
  ["ALL", "All"],
];

const DoctorApprovalTabs = () => {
  const [tab, setTab] = useState<"ALL" | DoctorVerificationStatus>("ALL");
  const [selectedId, setSelectedId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1)
  const debouncedSearch = useDebounce(searchInput);

  const handleSearch = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setSearchInput(e.target.value)
    setPage(1)

  }

  const queryParams: DoctorParams = {
    page,
    limit: 10,
    ...(tab === "ALL" ? {} : { verificationStatus: tab }),
    ...(debouncedSearch ? { searchTerm: debouncedSearch } : {}),
  };
  return (
    <>
      <div className="flex justify-between my-5">
        <div>
          <Input
            onChange={(e) => handleSearch(e)}
            type="search"
            placeholder="Search by name or email"
          />
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
        <DoctorApprovalTable
          {...queryParams}
          handleReview={setSelectedId}
          handlePageChange={setPage}
        />
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
