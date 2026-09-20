"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllDoctors } from "@/hooks/auth";
import type { Doctor, DoctorParams } from "@/types/doctor/doctor.type";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import TablePagination from "@/components/ui/table-pagination";

interface Props extends DoctorParams {
  handleReview: Dispatch<SetStateAction<string>>;
  handlePageChange: Dispatch<SetStateAction<number>>;
}

const DoctorApprovalTable = ({
  handleReview,
  handlePageChange,
  ...params
}: Props) => {
  const { data } = useSuspenseGetAllDoctors(params);
  const doctors: Doctor[] = Array.isArray(
    (data as { data?: Doctor[] } | undefined)?.data,
  )
    ? ((data as { data?: Doctor[] }).data ?? [])
    : [];

  return (
    <>
      <div className="w-full rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>License No.</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Specialization</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.licenseNumber ?? "-"}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.contactNumber ?? "-"}</TableCell>
                <TableCell>
                  {doctor.specialization ? doctor.specialization : "-"}
                </TableCell>
                <TableCell className="text-right">
                  {doctor.user.emailVerified ? (
                    <Button
                      disabled={doctor.verificationStatus !== "PENDING"}
                      variant="outline"
                      onClick={() => handleReview(doctor.id)}
                    >
                      Review
                    </Button>
                  ) : (
                    <Button disabled>Not Verified</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="my-5">
        <TablePagination
          totalPages={data.meta?.totalPages ?? 0}
          handlePageChange={handlePageChange}
          page={params.page ?? 0}
        />
      </div>
    </>
  );
};

export default DoctorApprovalTable;
